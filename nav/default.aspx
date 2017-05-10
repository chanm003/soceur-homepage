<%@ Page Language="C#" masterpagefile="~masterurl/default.master"  inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register tagprefix="WebPartPages" namespace="Microsoft.SharePoint.WebPartPages" assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register tagprefix="SharePoint" namespace="Microsoft.SharePoint.WebControls" assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content ContentPlaceHolderId="PlaceHolderPageTitleInTitleArea" runat="server">
	Page to Edit the Items in Custom Navigation Menu (temporarily using old 
	.Master page due to errors with new .Master Page, potential cause: 
	javascript synching issues)</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
	<asp:ScriptManagerProxy runat="server" id="ScriptManagerProxy">
	</asp:ScriptManagerProxy>
	<link href="/Shared%20Documents/nav/js/lib/jstree/themes/default/style.css" rel="stylesheet" type="text/css" />
	<table width="100%">
		<tr>
			<td style="width:50%; vertical-align:top;padding-left:15px;">
				<h3>Configuring the Navigation</h3>
                <h5>Warning: Do not try to make updates all at once. Click on 
				&#39;Save All Changes&#39; as you work</h5>
				<div id="jstree"></div>
				<br/>
				<br/>
				<button id="btnSave">Save all Changes</button>&nbsp;
				<!-- Not sure why we would want to give this option at all. Commenting out.
				<button id="btnReset">
				Reset to Default Menu Items</button>
				-->
			</td>
			<td style="width:50%; vertical-align:top;padding-left:65px;">
				<div id="editPanel" style="display:none;">
					<h3>Selected Menu Item</h3>
					<fieldset style="padding:15px 25px;">
						<legend>Properties</legend>
						<label>URL:</label><br/>
						<input type="text" id="menuItemUrl" style="width:100%;"/>
						<br/>
						<br/>
						<label>Visibility:</label><br/>
						<select id="menuItemVisibility">
							<option>Anonymous</option>
							<option>Authenticated</option>
							<option>Hidden</option>
						</select>
						<br/>
						<br/>
						<label>Target:</label><br/>
						<select id="menuItemTarget">
							<option>_self</option>
							<option>_blank</option>
						</select>
						<br/>
						<br/>

						<span style="display:none;" id="selectedMenuItem"></span>
					</fieldset>
				</div>
			</td>
		</tr>
	</table>
</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderUtilityContent" runat="server">

<script type="text/javascript" src="/Shared%20Documents/nav/js/lib/underscore.js"></script>
<script type="text/javascript" src="/Shared%20Documents/nav/js/lib/jquery.min.js"></script>
<script type="text/javascript" src="/Shared%20Documents/nav/js/lib/moment.js"></script>
<script type="text/javascript" src="/Shared%20Documents/nav/js/lib/jstree/jstree.min.js"></script>
<script type="text/javascript" src="/Shared%20Documents/nav/js/lib/jquery.SPServices-2014.01.min.js"></script>
<script type="text/javascript" src="/Shared%20Documents/nav/js/app/editGlobalNav.js"></script>
<script type="text/javascript" src="/Shared%20Documents/nav/js/app/datacontext.js"></script>

<script type="text/javascript">
    
    $(soceurMaster.uiEdit).on("globalNav.saveMenuItemsClicked", function(evt, data){
		soceurMaster.dataContext.saveNavigation({menuItems: data.menuItemsToSave});
	});

	$(soceurMaster.uiEdit).on("globalNav.resetClicked", function (evt, data) {
	    soceurMaster.dataContext.prepopulateWithDefaultNavMenuItems();
	});
    
	$.when(soceurMaster.dataContext.getNavigationWithoutExercises()).done(function(menuItems){
		soceurMaster.uiEdit.init(menuItems, "menuGoesHere");
	});   			
			
</script>




   </asp:Content>
