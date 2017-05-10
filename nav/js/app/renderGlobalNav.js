var soceurMaster = soceurMaster || {};
soceurMaster.ui = (function(){
    
			
	var exposedAPI = {
		init: init
	}
	
	var container = null;
	var timer = null;			
	function init(dataSource, domElementID){
		var rootElem = dataSource[0];
		container = $('#'+domElementID);
		container.html('');
		$("#soceur-menu").remove();		
		container.append(createMenuContainer(rootElem.children));
		container.show();
	}
	
	function addTargetAttribute(anchor, targetAttr){
		if(targetAttr === "_blank"){
			anchor.attr("target", targetAttr);
		}			
	}	
	
	function createMenuContainer(topLevelItems){
		var html = "";
	    html += '<div id="soceur-menu">';
		html += 	'<div class="menu horizontal menu-horizontal">';
		html += 	'</div>';
		html += '</div>';
		
		var menuContainerElem = $(html);
		
		menuContainerElem.find('.menu-horizontal')
			.append(createUL(topLevelItems));
		
		return menuContainerElem;
		
		function createUL(topLevelItems){
			var html = '';
			html += '<ul>';
			html += 	'<div class="menu-mega-tabs">';
			html += 	'</div>';
			html += '</ul>';
			var ul = $(html);
			var megaMenuTabs = ul.find('.menu-mega-tabs');
			
			
			topLevelItems = getVisibleMenuItems(topLevelItems);

			_.each(topLevelItems, function(item){
				createLevelOneMenuItem(item).appendTo(megaMenuTabs);
				createHiddenSubMenuForLevelOneMenuItem(item).appendTo(ul);
			});
			

			return ul;
		}
		
		function clearTimerForMenuClose(){
			clearTimeout($('#soceur-menu').data('timeout'));
		}
		
		function menuCloseDelay() {
			timer = setTimeout(function() {
			    $('#soceur-menu').find('.active').removeClass('active');
			}, 500);
			clearTimerForMenuClose();
			$('#soceur-menu').data('timeout', timer);
		}
				
		function createLevelOneMenuItem(item){			
				var anchor = $('<a class="menu-mega"></a>');
				anchor.attr("data-menu", item.text)
					.text(item.text)
					.hover(showSubMenu, menuCloseDelay);
					
				if(item.li_attr.url){
					anchor.attr("href", item.li_attr.url)
					addTargetAttribute(anchor, item.li_attr.target);
				}
				
				function showSubMenu(){
					clearTimerForMenuClose();
					var textOnHover = $(this).attr("data-menu");
					var newLeftPosition = container.position().left + $(this).position().left;	
					$("a.menu-mega").each(function(){
						var anchor = $(this);
						var shouldActivate = anchor.attr("data-menu") === textOnHover;
						anchor.toggleClass("active", shouldActivate);
					});
					$("div.menu-mega-contents").each(function(){
						var div = $(this);
						var shouldActivate = div.attr("data-menu") === textOnHover;
						div.toggleClass("active", shouldActivate);
						
						if(shouldActivate){
							div.css({"left": newLeftPosition});
						}
					});

				}
				return anchor;
				
		}
		
		function createHiddenSubMenuForLevelOneMenuItem(item){
			if(item.children.length){
				var html = "";
				html += '<div class="menu-mega-contents">';
				html += 	'<div class="inner">';
				html += 	'</div>';
				html += '</div>';
				
				var megaMenuContents = $(html);
				var inner = megaMenuContents.find(".inner");
				megaMenuContents
					.attr("data-menu", item.text)
					.hover(clearTimerForMenuClose, menuCloseDelay);
				
				item.children = getVisibleMenuItems(item.children);
				_.each(item.children, function(item){
					createLevelTwoMenuItem(item).appendTo(inner);
				});
				
				return megaMenuContents;
			} else {
				//no children, so no submenu
				return $('<span></span>');
			}	
		}
		
		function getVisibleMenuItems(items){
			return  _.filter(items, function(item){ return shouldPrint(item); });
			function shouldPrint(item){
				if(!item.li_attr || item.li_attr.visibility === "Hidden"){
					return false;
				}
				
				/*if(item.li_attr.visibility === "Authenticated" && !_spPageContextInfo.userId){
					return false;
				}*/
				
				return true;
			}
		}
		
		function createLevelTwoMenuItem(item){
			var html = '';
			html += '<div class="menu-group">';
			html += '</div>';
			var menuGroup = $(html);
			menuGroup.attr("data-menu", item.text);
			createMenuGroupName(item).appendTo(menuGroup);
			
			if(item.children.length){
				createFlyoutWrapper(item).appendTo(menuGroup);
			}
			
			menuGroup.hover(clearTimerForMenuClose, function(){});
			
			return menuGroup;
		
			function createMenuGroupName(secondLevelItem){
				var html = '';
				html += '<div class="menu-group-name">';
				html += 	'<h3>';
				html += 		'<a></a>';
				html += 	'</h3>';
				html += '</div>';
				
				var menuGroupName = $(html);
				var anchor = menuGroupName.find("a");
				
				anchor.attr('href', secondLevelItem.li_attr.url)
					.attr("data-menu", secondLevelItem.text)
					.text(secondLevelItem.text)
					.on('mouseover', showFlyoutWrapper);
					
				addTargetAttribute(anchor, item.li_attr.target);
				
	
				if(secondLevelItem.children.length){
					anchor.addClass("more");
				}
				
				return menuGroupName;
			}
			
			function createFlyoutWrapper(item){
				var html = '';
				html += '<div class="menu-group-flyout-wrapper">';
				html += 	'<div class="menu-group-flyout">';
				html += 		'<div class="menu-flyout-title">';
				html += 			'<a></a>';
				html += 		'</div>';
				html += 	'</div>';
				html += '</div>';
			
				var flyoutWrapper = $(html);
				flyoutWrapper.attr("data-menu", item.text)
				var flyoutWrapperAnchor = flyoutWrapper.find("a");
				flyoutWrapperAnchor.attr('href', item.li_attr.url)
					.text(item.text);
					
				addTargetAttribute(flyoutWrapperAnchor, item.li_attr.target);

					
				var menuGroupFlyout = flyoutWrapper.find('.menu-group-flyout');
				
				item.children = getVisibleMenuItems(item.children);

				var totalLength = item.children.length;
				var column = null;
				if(totalLength){
					column = $('<div class="column"></div>');
					menuGroupFlyout.append(column);	
				}
				
				_.each(item.children, function(child, index){
					var isFirstHalf = index === 0 || index < Math.round(totalLength/2);
					
					if(isFirstHalf){
						createBelowLevelTwoHead(child, isFirstHalf).appendTo(column);
					} else {
						createBelowLevelTwoHead(child, isFirstHalf).appendTo(menuGroupFlyout);
					}	
				});
				
				return flyoutWrapper;
			}
			
			function showFlyoutWrapper(){
				var anchorThatUserHoveredOver = $(this);
				var textOnHover = anchorThatUserHoveredOver.attr("data-menu");
				var menuGroup = anchorThatUserHoveredOver.closest(".menu-group");
				
				$("div.menu-group").each(function(){
					var div = $(this);
					var shouldActivate = div.attr("data-menu") === textOnHover;
					div.toggleClass("active", shouldActivate);
				});
				
				var flyoutWrapper = menuGroup.find(".menu-group-flyout-wrapper");
				var newPositionTop = container.position().left + menuGroup.position().top + 150;
				flyoutWrapper.css({'top': newPositionTop});
					
			}
			
			function createBelowLevelTwoHead(item){
				var html = '';
				html += '<div class="belowLevel2Head">';
				html += 	'<a></a>';
				html += '</div>';
				
				var bl2Head = $(html);
				
				var bl2HeadAnchor = bl2Head.find("a");
				bl2HeadAnchor.attr('href', item.li_attr.url)
					.text(item.text);
					
				addTargetAttribute(bl2HeadAnchor, item.li_attr.target);
				
				item.children = getVisibleMenuItems(item.children);
	
				_.each(item.children, function(child){
					createMenuItemSub(child).appendTo(bl2Head);
				});
				
				return bl2Head;
			}
			
			function createMenuItemSub(item){
				var html = "";
				html += '<div class="menu-item-sub">';
				html += 	'&raquo; <a></a>';
				html += '</div>';
				
				var subItem = $(html);
				var subItemAnchor = subItem.find("a");
				subItemAnchor.attr('href', item.li_attr.url)
					.text(item.text);
					
				addTargetAttribute(subItemAnchor, item.li_attr.target);

				return subItem;
			}
			
			
		}
	}
	
	return exposedAPI;  	

    
})();
