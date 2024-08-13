// ==UserScript==
// @name          Tampermonkey Salesforce Lightning Admin Links
// @description   Setup links to the top of all Lightning Salesforce pages
// @version       1
// @author        Sandeep Gaikwad
// @updateURL     https://github.com/sandeep-mg/Tampermonkey-Salesforce-Lightning-Admin-Links/raw/main/TampermonkeySalesforceLightningAdminLinks.user.js
// @downloadURL   https://github.com/sandeep-mg/Tampermonkey-Salesforce-Lightning-Admin-Links/raw/main/TampermonkeySalesforceLightningAdminLinks.user.js
// @description   Tampermonkey Salesforce Lightning Admin Links
// @match         https://*.lightning.force.com/*
// @require       https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js
// @require       https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant         GM_addStyle
// ==/UserScript==


function addSetupLinks(jNode) {
/* these are lightning setup urls:
setup home - setup/one/one.app#/setup/home
apex classes - /one/one.app?source=aloha#/setup/ApexClasses/home
debug logs - /one/one.app?source=aloha#/setup/ApexDebugLogs/home
apex jobs - /one/one.app?source=aloha#/setup/AsyncApexJobs/home
vf pages - /one/one.app?source=aloha#/setup/ApexPages/home
custom settings - /one/one.app?source=aloha#/setup/CustomSettings/home
users - /one/one.app?source=aloha#/setup/ManageUsers/home
profiles - /one/one.app?source=aloha#/setup/EnhancedProfiles/home

NOT USING lighting setup urls above YET because it SUCKS
*/
	jNode.prepend (
		'<span style="color:#ffffff;font-weight:bold;padding:0px;margin-top:3px;"><a href="https://mathworks.lightning.force.com/" style="color:#ffffff;">Home</a>&nbsp;|&nbsp;' +
        '<a href="https://mathworks.lightning.force.com/lightning/setup/SetupOneHome/home" style="color:#ffffff;">Setup</a>&nbsp;|&nbsp;' +
		'<a href="https://mathworks.lightning.force.com/lightning/setup/ObjectManager/home" style="color:#ffffff;">Objects</a>&nbsp;|&nbsp;' +
		//'<a target="_blank" href="https://mathworks.my.salesforce.com/_ui/common/apex/debug/ApexCSIPage" style="color:#ffffff;">Console</a>&nbsp;|&nbsp;' +
		//'<a href="/setup/ui/listApexTraces.apexp" style="color:#ffffff;">Logs</a>&nbsp;|&nbsp;' +
		//'<a href="/_ui/networks/setup/SetupNetworksPage" style="color:#ffffff;">Dig Ex</a>&nbsp;|&nbsp;' +
		//'<a href="/01p" style="color:#ffffff;">Classes</a>&nbsp;|&nbsp;' +
		//'<a href="/ui/setup/apex/ApexTestQueuePage" style="color:#ffffff;">Tests</a>&nbsp;|&nbsp;' +
		//'<a href="/apexpages/setup/listApexPage.apexp" style="color:#ffffff;">Pages</a>&nbsp;|&nbsp;' +
		//'<a href="/apexpages/setup/listAsyncApexJobs.apexp" style="color:#ffffff;">Jobs</a>&nbsp;|&nbsp;' +
		//'<a href="/08e" style="color:#ffffff;">Sched</a>&nbsp;|&nbsp;' +
		'<a href="https://mathworks.lightning.force.com/lightning/setup/CustomSettings/home" style="color:#ffffff;">CS</a>&nbsp;|&nbsp;' +
		//'<a href="/_ui/platform/ui/schema/wizard/entity/CustomMetadataTypeListPage?setupid=CustomMetadata" style="color:#ffffff;">CMT</a>&nbsp;|&nbsp;' +
		'<a href="https://mathworks.lightning.force.com/lightning/setup/PermSets/home" style="color:#ffffff;">Perm Set</a>&nbsp;|&nbsp;' +
		'<a href="https://mathworks.lightning.force.com/lightning/setup/ManageUsers/home" style="color:#ffffff;">Users</a>&nbsp;|&nbsp;' +
		'<a href="https://mathworks.lightning.force.com/lightning/setup/EnhancedProfiles/home" style="color:#ffffff;">Profiles</a>&nbsp;|&nbsp;' +
		//'<a href="/one/one.app#/settings/personal/PersonalInformation/home" style="color:#ffffff;">MS</a>&nbsp;|&nbsp;' +
		'<a target="_blank" href="https://mathworks.lightning.force.com/HelpAndTrainingDoor?resource=https://help.salesforce.com/s/support&version=2" style="color:#ffffff;">Help</a>&nbsp;|&nbsp;' +
		'<a href="/ltng/switcher?destination=classic" style="color:#ffffff;">Classic</a></span>&nbsp;&nbsp;'
	);
}

//waitForKeyElements("div[class='system-message level-info']", addSetupLinks);
waitForKeyElements("div[class='slds-button-group slds-global-actions__favorites oneFavorites']", addSetupLinks);
