# soceur-homepage

Deploys a webpage on SP2013 which
* contains a slideshow that shuffles through static images
* displays static content about the command
* utilizes a SharePoint list-driven mega-menu

## Upload files and folders to SP2013
| Asset        | Copy to the location           |
| ------------- |:-------------:| 
| `airborne` folder      | / |
| `nav` folder      | /      |
| `Home.aspx` | /      |
| `seattle_airborne.master` | /_catalogs/masterpage      |
 
## Seed the data that drives the custom navigation
Navigate to `Home.aspx`, then hit F12, then click the Console tab.  Run the command as shown below:
![alt text](https://raw.githubusercontent.com/chanm003/soceur-homepage/master/cli-navigation.PNG)

## Publish the .master

1. Navigate to `/_catalogs/masterpage` library
2. Find `seattle_airborne.master`, then right-click --> Publish a Major Version

## Push the .master down to all subsites

1. Navigate to `/_layouts/15/ChangeSiteMasterPage.aspx` (may require Publishing feature to be turned on)
2. Push this down `seattle_airborne.master`

## Configure the custom navigation (optional)

Navigate to `/nav/default.aspx`
