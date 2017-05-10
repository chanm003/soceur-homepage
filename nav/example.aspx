<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<%@ Page Language="C#" %>
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:mso="urn:schemas-microsoft-com:office:office" xmlns:msdt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882">

<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Test</title>
<link href="/Shared%20Documents/nav/menus.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="/Shared%20Documents/nav/js/lib/underscore.js"></script>
<script type="text/javascript" src="/Shared%20Documents/nav/js/lib/jquery.min.js"></script>
<script type="text/javascript" src="/Shared%20Documents/nav/js/lib/moment.js"></script>
<script type="text/javascript" src="/Shared%20Documents/nav/js/lib/jstree/jstree.min.js"></script>
<script type="text/javascript" src="/Shared%20Documents/nav/js/lib/jquery.SPServices-2014.01.min.js"></script>
<script type="text/javascript" src="/Shared%20Documents/nav/js/app/renderGlobalNav.js"></script>
<script type="text/javascript" src="/Shared%20Documents/nav/js/app/datacontext.js"></script>

<script type="text/javascript">
    
	$.when(soceurMaster.dataContext.getNavigation()).done(function(menuItems){
		soceurMaster.ui.init(menuItems, "menuGoesHere");
	});   			
			
</script>


<!--[if gte mso 9]><SharePoint:CTFieldRefs runat=server Prefix="mso:" FieldList="Classification,Caveats,SpecialReleasability,ReleasabilityNotes,WikiField,FileLeafRef"><xml>
<mso:CustomDocumentProperties>
<mso:display_urn_x003a_schemas-microsoft-com_x003a_office_x003a_office_x0023_Editor msdt:dt="string">Chan, Michael CTR SOCEUR SOJ69</mso:display_urn_x003a_schemas-microsoft-com_x003a_office_x003a_office_x0023_Editor>
<mso:Classification msdt:dt="string"></mso:Classification>
<mso:Order msdt:dt="string">17100.0000000000</mso:Order>
<mso:WikiField msdt:dt="string"></mso:WikiField>
<mso:Caveats msdt:dt="string"></mso:Caveats>
<mso:display_urn_x003a_schemas-microsoft-com_x003a_office_x003a_office_x0023_Author msdt:dt="string">Chan, Michael CTR SOCEUR SOJ69</mso:display_urn_x003a_schemas-microsoft-com_x003a_office_x003a_office_x0023_Author>
<mso:SpecialReleasability msdt:dt="string"></mso:SpecialReleasability>
<mso:ReleasabilityNotes msdt:dt="string"></mso:ReleasabilityNotes>
<mso:_SourceUrl msdt:dt="string"></mso:_SourceUrl>
<mso:_SharedFileIndex msdt:dt="string"></mso:_SharedFileIndex>
</mso:CustomDocumentProperties>
</xml></SharePoint:CTFieldRefs><![endif]-->
</head>

<body>
	<table>
		<tr>
			<td style="width:70px;">&nbsp;</td>
			<td>
				<div style="background-color:red;width:700px;height:100px;">
				</div>
			
				<div id="menuGoesHere" style="background-color:black;width:700px;height:100px;">
					<div id="soceur-menu"><div class="menu horizontal menu-horizontal"><ul><div class="menu-mega-tabs"><a href="/" data-menu="SOCEUR" class="menu-mega">SOCEUR</a><a data-menu="Organizations" class="menu-mega">Organizations</a><a data-menu="Information" class="menu-mega">Information</a><a href="/OAA/Talking Points" data-menu="Battlespace" class="menu-mega">Battlespace</a><a data-menu="Administration" class="menu-mega">Administration</a><a data-menu="Support" class="menu-mega">Support</a><a data-menu="Links" class="menu-mega">Links</a></div></ul></div></div>
				</div>
			</td>
		</tr>
	</table>
</body>

</html>
