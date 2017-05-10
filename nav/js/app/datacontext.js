var soceurMaster = soceurMaster || {};
soceurMaster.dataContext = (function(){

    var schemas = {
    	navigation: {
            camlViewFields:
                "<ViewFields>\
					<FieldRef Name='JSON'/>\
                </ViewFields>",
            jsonMapping: {
                ows_JSON: { mappedName: "json", objectType: "JSON" }
            }
        },
        exercise: {
            camlViewFields:
                "<ViewFields>\
					<FieldRef Name='ID' />\
					<FieldRef Name='Acronym' />\
					<FieldRef Name='Color' />\
					<FieldRef Name='RoutingRuleDescription' />\
					<FieldRef Name='DistributionList' />\
					<FieldRef Name='ExColor' />\
					<FieldRef Name='Title' />\
					<FieldRef Name='_x0035__x0020_Ws' />\
				</ViewFields>",
            jsonMapping: {
                ows_ID: {mappedName: "id", objectType: "Counter"},
				ows_Color: {mappedName: "color", objectType: "Text"},
				ows_RoutingRuleDescription: {mappedName: "description", objectType: "Text"},
				ows_DistributionList: {mappedName: "distributionList", objectType: "Text"},
				ows_Title: {mappedName: "exercise", objectType: "Text"},
				ows_ExColor: {mappedName: "exerciseColor", objectType: "Text"},
				ows__x0035__x0020_Ws: {mappedName: "exerciseDescription", objectType: "Text"},
				ows_Acronym: {mappedName: "acronym", objectType: "Text"}            
			}
        }

    };
	
	function _getNavigation(opts) {
		var defaults = {
			webURL: '/'
		};
		var settings = $.extend({},defaults,opts || {});
		
	    return $().SPServices({
	        operation: "GetListItems",
	        webURL: settings.webURL,
	        listName: 'nav',
	        async: true,
	        CAMLViewFields: schemas.navigation.camlViewFields
	    }).then(function (xData, status) {

	        var json = $(xData).SPFilterNode("z:row").SPXmlToJson({
	            mapping: schemas.navigation.jsonMapping,
	            includeAllAttrs: false
	        });

	        if (json.length !== 1) {
	            //List should have one and only one list item
	            alert("Error: Unable to retrieve navigation...");
	        } else {
	            return (typeof json[0].json === "string") ? JSON.parse(json[0].json) : json[0].json;
	        }

	        
	    }).fail(function (xData, status) {
	        return xData.responseText;
	    });
	}

	function getNavigation(opts){
		return $.when(_getNavigation(opts), getExercises())
			.done(function(menuItem, exercises){
				var parentItem = findParentItemForExercises(menuItem);
	  			appendExercises(parentItem, exercises);
			});
		
		function findParentItemForExercises(menuItem){
				var parentItem = null;
				_.each(menuItem, process);
				return parentItem;
			
				function process(item){
					if(item.text === "Exercise Planning"){
						parentItem = item;
					} else {
						//keep looking....
						_.each(item.children, process);
					}
				};
		};
		
		function appendExercises(parentMenuItem, exercises){
			if(!parentMenuItem) { return };
			
			var childItems = _.map(exercises, function(item){
				return {
					text: item.exercise,
					li_attr: {
						url: item.URL
					},
					children: []
				};
			});
			
			parentMenuItem.children = parentMenuItem.children.concat(childItems);
		};

	}
	
	function getNavigationWithoutExercises(opts){
		return _getNavigation(opts);
	}


	function getCurrentUser() {
	    return $().SPServices.SPGetCurrentUser({
	        fieldName: "Name",
	        debug: false
	    });
	}
	
	function getExercises() {
		var camlQuery = 
			"<Query><Where><Eq><FieldRef Name='Archive' /><Value Type='Text'>No</Value></Eq></Where><OrderBy><FieldRef Name='Title' Ascending='True' /></OrderBy></Query>";				
	
	    return $().SPServices({
	        operation: "GetListItems",
	        webURL: '/j3/j37',
	        listName: 'Exercise',
	        async: true,
	        CAMLQuery: camlQuery,
	        CAMLViewFields: schemas.exercise.camlViewFields
	    }).then(function (xData, status) {

	        var json = $(xData).SPFilterNode("z:row").SPXmlToJson({
	            mapping: schemas.exercise.jsonMapping,
	            includeAllAttrs: false
	        });

			json = _.map(json, reshapeAfterSpServicesJsonMapping); 
			return json;
	       	        
	    }).fail(function (xData, status) {
	        return xData.responseText;
	    });
	    
	    function reshapeAfterSpServicesJsonMapping(item){
			item.URL = '/j3/j37/SitePages/exercise.aspx?Exercise=' + item.exercise;
			item.exerciseColor = (item.exerciseColor.indexOf("#") > -1) ? item.exerciseColor.substring(item.exerciseColor.indexOf("#")+1) : item.exerciseColor;
			return item;
		}

	}


	function prepopulateWithDefaultNavMenuItems() {
	    if (confirm("This will overwrite existing menu items (if there ar any)") == true) {
	        var data = [{ "id": "j1_1", "text": "Custom Global Navigation (ensure this node remains the one and only root node)", "icon": true, "li_attr": { "id": "j1_1" }, "a_attr": { "href": "#", "id": "j1_1_anchor" }, "state": { "loaded": true, "opened": true, "selected": false, "disabled": true }, "data": {}, "children": [{ "id": "j1_2", "text": "SOCC", "icon": true, "li_attr": { "id": "j1_2", "url": "/app/SOCC.aspx", "visibility": "Anonymous" }, "a_attr": { "href": "#", "id": "j1_2_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_3", "text": "Components", "icon": true, "li_attr": { "id": "j1_3", "url": "", "visibility": "Anonymous" }, "a_attr": { "href": "#", "id": "j1_3_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [{ "id": "j1_4", "text": "SOTG-15", "icon": true, "li_attr": { "id": "j1_4", "visibility": "Anonymous", "url": "app/SOTG1.aspx" }, "a_attr": { "href": "#", "id": "j1_4_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_6", "text": "SOTG-25", "icon": true, "li_attr": { "id": "j1_6", "visibility": "Anonymous", "url": "app/SOTG2.aspx" }, "a_attr": { "href": "#", "id": "j1_6_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_7", "text": "SOTG-35", "icon": true, "li_attr": { "id": "j1_7", "visibility": "Anonymous", "url": "app/SOTG3.aspx" }, "a_attr": { "href": "#", "id": "j1_7_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }], "type": "default" }, { "id": "j1_56", "text": "SOAC", "icon": true, "li_attr": { "id": "j1_56", "url": "app/SOAC.aspx", "visibility": "Anonymous" }, "a_attr": { "href": "#", "id": "j1_56_anchor" }, "state": { "loaded": true, "opened": true, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_9", "text": "EXCON (Private)", "icon": true, "li_attr": { "id": "j1_9", "visibility": "Anonymous", "url": "app/Excon.aspx" }, "a_attr": { "href": "#", "id": "j1_9_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_10", "text": "Battlespace", "icon": true, "li_attr": { "id": "j1_10", "visibility": "Anonymous" }, "a_attr": { "href": "#", "id": "j1_10_anchor" }, "state": { "loaded": true, "opened": true, "selected": false, "disabled": false }, "data": {}, "children": [{ "id": "j1_13", "text": "Air Assets", "icon": true, "li_attr": { "id": "j1_13", "visibility": "Anonymous", "url": "app/airassets.aspx" }, "a_attr": { "href": "#", "id": "j1_13_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_14", "text": "Air Support Request", "icon": true, "li_attr": { "id": "j1_14", "visibility": "Anonymous", "url": "app/asr.aspx" }, "a_attr": { "href": "#", "id": "j1_14_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_15", "text": "Commanders Update Brief", "icon": true, "li_attr": { "id": "j1_15", "visibility": "Anonymous", "url": "app/cub.aspx" }, "a_attr": { "href": "#", "id": "j1_15_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_16", "text": "Communications Tracker", "icon": true, "li_attr": { "id": "j1_16", "visibility": "Anonymous", "url": "app/comms.aspx" }, "a_attr": { "href": "#", "id": "j1_16_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_18", "text": "Current Operations Summary - Projection", "icon": true, "li_attr": { "id": "j1_18", "visibility": "Anonymous", "url": "app/projection.aspx" }, "a_attr": { "href": "#", "id": "j1_18_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_19", "text": "Mission Tracker", "icon": true, "li_attr": { "id": "j1_19", "visibility": "Anonymous", "url": "app/MissionTracker.aspx" }, "a_attr": { "href": "#", "id": "j1_19_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_20", "text": "Request for Information", "icon": true, "li_attr": { "id": "j1_20", "visibility": "Anonymous", "url": "app/rfi.aspx" }, "a_attr": { "href": "#", "id": "j1_20_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }], "type": "default" }, { "id": "j1_11", "text": "Information", "icon": true, "li_attr": { "id": "j1_11", "visibility": "Anonymous" }, "a_attr": { "href": "#", "id": "j1_11_anchor" }, "state": { "loaded": true, "opened": true, "selected": false, "disabled": false }, "data": {}, "children": [{ "id": "j1_21", "text": "Announcements", "icon": true, "li_attr": { "id": "j1_21", "visibility": "Anonymous", "url": "app/announce.aspx" }, "a_attr": { "href": "#", "id": "j1_21_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_22", "text": "Calendar", "icon": true, "li_attr": { "id": "j1_22", "visibility": "Anonymous" }, "a_attr": { "href": "#", "id": "j1_22_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [{ "id": "j1_31", "text": "Academics", "icon": true, "li_attr": { "id": "j1_31", "visibility": "Anonymous", "url": "Lists/PNTCalendar//Academics.aspx" }, "a_attr": { "href": "#", "id": "j1_31_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_32", "text": "Battle Rhythm", "icon": true, "li_attr": { "id": "j1_32", "visibility": "Anonymous", "url": "Lists/PNTCalendar//BattleRhythm.aspx" }, "a_attr": { "href": "#", "id": "j1_32_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_33", "text": "EXCON", "icon": true, "li_attr": { "id": "j1_33", "visibility": "Anonymous", "url": "Lists/PNTCalendar//EXCON.aspx" }, "a_attr": { "href": "#", "id": "j1_33_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_37", "text": "SOCC-Intel", "icon": true, "li_attr": { "id": "j1_37", "visibility": "Anonymous", "url": "Lists/PNTCalendar//SOCCIntel.aspx" }, "a_attr": { "href": "#", "id": "j1_37_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_38", "text": "SOCC-Operations", "icon": true, "li_attr": { "id": "j1_38", "visibility": "Anonymous", "url": "Lists/PNTCalendar//SOCCOperations.aspx" }, "a_attr": { "href": "#", "id": "j1_38_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_39", "text": "SOCC-SIGCEN", "icon": true, "li_attr": { "id": "j1_39", "visibility": "Anonymous", "url": "Lists/PNTCalendar//SOCCSIGCEN.aspx" }, "a_attr": { "href": "#", "id": "j1_39_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_40", "text": "SOCC-SUPCEN", "icon": true, "li_attr": { "id": "j1_40", "visibility": "Anonymous", "url": "Lists/PNTCalendar//SOCCSUPCEN.aspx" }, "a_attr": { "href": "#", "id": "j1_40_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_45", "text": "SOAC", "icon": true, "li_attr": { "id": "j1_45", "visibility": "Anonymous", "url": "Lists/PNTCalendar//SOAC.aspx" }, "a_attr": { "href": "#", "id": "j1_45_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_46", "text": "SOTG-15", "icon": true, "li_attr": { "id": "j1_46", "visibility": "Anonymous", "url": "Lists/PNTCalendar//SOTG-15.aspx" }, "a_attr": { "href": "#", "id": "j1_46_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_47", "text": "SOTG-25", "icon": true, "li_attr": { "id": "j1_47", "visibility": "Anonymous", "url": "Lists/PNTCalendar//SOTG-25.aspx" }, "a_attr": { "href": "#", "id": "j1_47_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_48", "text": "SOTG-35", "icon": true, "li_attr": { "id": "j1_48", "visibility": "Anonymous", "url": "Lists/PNTCalendar//SOTG-35.aspx" }, "a_attr": { "href": "#", "id": "j1_48_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_49", "text": "VTC", "icon": true, "li_attr": { "id": "j1_49", "visibility": "Anonymous", "url": "Lists/PNTCalendar//VTC.aspx" }, "a_attr": { "href": "#", "id": "j1_49_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }], "type": "default" }, { "id": "j1_23", "text": "Exercise Documents", "icon": true, "li_attr": { "id": "j1_23", "visibility": "Anonymous", "url": "app/ExDoc.aspx" }, "a_attr": { "href": "#", "id": "j1_23_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_24", "text": "Phonebook", "icon": true, "li_attr": { "id": "j1_24", "visibility": "Anonymous", "url": "app/Phone.aspx" }, "a_attr": { "href": "#", "id": "j1_24_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_25", "text": "VTC", "icon": true, "li_attr": { "id": "j1_25", "visibility": "Anonymous", "url": "Lists/PNTCalendar//VTC.aspx" }, "a_attr": { "href": "#", "id": "j1_25_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }], "type": "default" }, { "id": "j1_12", "text": "Support", "icon": true, "li_attr": { "id": "j1_12", "visibility": "Anonymous" }, "a_attr": { "href": "#", "id": "j1_12_anchor" }, "state": { "loaded": true, "opened": true, "selected": false, "disabled": false }, "data": {}, "children": [{ "id": "j1_26", "text": "Help Desk", "icon": true, "li_attr": { "id": "j1_26", "visibility": "Anonymous", "url": "app/HelpDesk.aspx" }, "a_attr": { "href": "#", "id": "j1_26_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_27", "text": "Recycle Bin", "icon": true, "li_attr": { "id": "j1_27", "visibility": "Anonymous", "url": "_layouts/recyclebin.aspx" }, "a_attr": { "href": "#", "id": "j1_27_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }, { "id": "j1_28", "text": "Site Help", "icon": true, "li_attr": { "id": "j1_28", "visibility": "Anonymous", "url": "help" }, "a_attr": { "href": "#", "id": "j1_28_anchor" }, "state": { "loaded": true, "opened": false, "selected": false, "disabled": false }, "data": {}, "children": [], "type": "default" }], "type": "default" }], "type": "default" }];
	        saveNavigation(data);
	    }
	}

	function saveNavigation(opts) {
		var defaults = {
			webURL: '/'
		};
		var settings = $.extend({},defaults,opts || {});
	    //assumes that there is one and only one list item
        //assumes that the original list item was not deleted...just continually updated
	    return $().SPServices({
	        operation: "UpdateListItems",
	        listName: "nav",
	        webURL: settings.webURL,
	        ID: 1,
	        valuepairs: [["JSON", JSON.stringify(settings.menuItems)]]
	    })
	    .then(function () {
	        alert("Success: Navigation has been saved.  \n\n- Please instruct users to close and reopen their browsers");
	        location.reload();
	    })
        .fail(function () {
            alert("Error: Could not save navigation");
        });
	}

	//public API    
	return {
		getCurrentUser: getCurrentUser,
        getNavigation: getNavigation,
        getNavigationWithoutExercises: getNavigationWithoutExercises,
	    prepopulateWithDefaultNavMenuItems: prepopulateWithDefaultNavMenuItems,
        saveNavigation: saveNavigation
	}    
})();


