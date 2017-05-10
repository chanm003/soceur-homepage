define(function (require) {
	    
    //dependencies
    var $ = require('jquery'),
        _ = require('underscore'),
        datacontext = require('app/datacontext'),
        currentUser = datacontext.getCurrentUser(),
        strTopLevelNodes = [];

	function buildMenuItem(node){
		var $elm, // $elm will either a <span> or <a> tag
			href = node.li_attr && node.li_attr.url;
		
		if(href !== ""){
			var isAbsoluteUrl = !href || href.indexOf("http") > -1;
			href = (isAbsoluteUrl) ? href : _spPageContextInfo.webServerRelativeUrl + "/" + href;
			$elm = $('<a></a>');
			$elm.attr('href', href);
		}else{
			$elm = $('<span></span>');
		}
		
		$elm.addClass((_.contains(strTopLevelNodes, node.text)) ? 'static' : 'dynamic');
		$elm.addClass('menu-item');

		var $spanInner = $('<span class="menu-item-text"></span>');
		$spanInner.html(node.text);
	
		var $spanOuter = $('<span class="additional-background"></span>');
	
		$spanOuter.append($spanInner);
	
		$elm.append($spanOuter);
		
		return $elm;
	}
	
	function createChildUL(nodes, parentLI, isTopLevel){
		if(!nodes || !nodes.length){
			//base case
			return;
		}
		
		var $childUl = $('<ul>');
		$childUl.addClass((isTopLevel) ? 'static' : 'dynamic');
		
		_.each(nodes, function (node) {
		    var shouldDisplay = (node.li_attr.visibility === "Anonymous" ||
                (node.li_attr.visibility === "Authenticated" && currentUser) ||
                !node.li_attr.visibility);
			//console.log(node.text);
		    if (shouldDisplay) {
		        var $li = $('<li></li>');
		        var $elm = buildMenuItem(node);
		        $li.addClass((isTopLevel) ? 'static' : 'dynamic');

		        if (node.children.length > 0) {
		            $li.addClass('dynamic-children');
		            $elm.addClass('dynamic-children');
		        }

		        $li.append($elm);
		        createChildUL(node.children, $li, false);
		        $childUl.append($li);
		    }
		});
		
		parentLI.append($childUl);  
	}

	function initMenu() {
		datacontext.getNavigation().then(function(data){
			// Clear out the current nav
			$('.menu-horizontal').empty();
	
			// Build the outer shell
			var $outerUL = $('<ul class="root static"></ul>');
			var $outerLI = $('<li class="static"></li>');

			var rootNode = data[0];
		
			if (rootNode.children) { 
			    //items that are visible without hovering
			    strTopLevelNodes = _.pluck(rootNode.children, "text");
	
			    createChildUL(rootNode.children, $outerLI, true);
			
			    $outerUL.append($outerLI);
			
			    $('.menu-horizontal').append($outerUL);
			
			    // Attach the SharePoint event handlers
			    var container = $('.menu-horizontal').parent().attr('id');
			    $create(SP.UI.AspMenu,null,null,null,$get(container));
			
			    $('.s4-toplinks').show();
			}
		});
	}	
	
	//public API    
	return {
		initMenu: initMenu
	}    
});


