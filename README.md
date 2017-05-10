# soceur-homepage

Deploys a webpage on SP2013 which
* contains a slideshow that shuffles through static images
* displays static content about the command
* utilizes a SharePoint list-driven mega-menu

## Upload folders and webpage to root web for site collection
Folders `airborne` and `nav` and the `Home.aspx` page. The second folder is actually a Wiki Page Library.

## Seed the data that drives the custom navigation
Navigate to `Home.aspx`, then hit F12, then click the Console tab.  Run the command as shown below:
![alt text](https://raw.githubusercontent.com/chanm003/soceur-homepage/master/cli-navigation.PNG)

## Upload .master to the gallery and push the .master down to all subsites

.Master file is `seattle_airborne.master`

## Configure the custom navigation (optional)

Navigate to `/nav/default.aspx`
