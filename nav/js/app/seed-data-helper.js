window.createDataSourceForNavigation = function(){
	var ctx = SP.ClientContext.get_current();
	var spWeb = ctx.get_web();
	var createdList = null;
	
	var listCreationInfo = new SP.ListCreationInformation();
	listCreationInfo.set_title('nav');
	listCreationInfo.set_templateType(SP.ListTemplateType.genericList);
	createdList = spWeb.get_lists().add(listCreationInfo);
	var multiTextFieldXml = "<Field Type='Note' Name='JSON' StaticName='JSON' DisplayName='JSON' NumLines='6' RichText='FALSE' Sortable='FALSE' Required='TRUE'/>"
	createdList.get_fields().addFieldAsXml(multiTextFieldXml, true, SP.AddFieldOptions.addFieldInternalNameHint);
	ctx.load(createdList);
	ctx.executeQueryAsync(
		Function.createDelegate(this, onListCreated),
		Function.createDelegate(this, onQueryFailed)
	);
	
	function onListCreated() {
		var itemCreateInfo = new SP.ListItemCreationInformation();  
	        var listItem = createdList.addItem(itemCreateInfo);
			var jsonRepresentationForMenu = '[{"id":"j1_1","text":"Custom Global Navigation (ensure this node remains the one and only root node)","icon":true,"li_attr":{"id":"j1_1"},"a_attr":{"href":"#","id":"j1_1_anchor"},"state":{"loaded":true,"opened":true,"selected":false,"disabled":true},"data":{},"children":[{"id":"j1_2","text":"SOCEUR","icon":true,"li_attr":{"id":"j1_2","url":"/","visibility":"Anonymous","target":"_self"},"a_attr":{"href":"#","id":"j1_2_anchor"},"state":{"loaded":true,"opened":false,"selected":true,"disabled":false},"data":{},"children":[],"type":"default"}],"type":"default"}]';  
	        listItem.set_item('Title', '**DO NOT DELETE');
	        listItem.set_item('JSON', jsonRepresentationForMenu);  
	        listItem.update();  
	        ctx.load(listItem);
		ctx.executeQueryAsync(
			Function.createDelegate(this, onListItemCreated),
			Function.createDelegate(this, onQueryFailed)
		);
		function onListItemCreated() {
			alert('Navigation list created successfully.  Seeded with one list item.');   
		}  
	}
	function onQueryFailed(sender, args) {
	        alert('Request to create nav list failed: ' + args.get_message());
	}
	
}
