// ==UserScript==
// @name          Tampermonkey Salesforce Lightning Admin Links
// @description   Setup links to the top of all Lightning Salesforce pages
// @version       1.5
// @author        Sandeep Gaikwad
// @updateURL     https://github.com/sandeep-mg/Tampermonkey-Salesforce-Lightning-Admin-Links/raw/main/TampermonkeySalesforceLightningAdminLinks.user.js
// @downloadURL   https://github.com/sandeep-mg/Tampermonkey-Salesforce-Lightning-Admin-Links/raw/main/TampermonkeySalesforceLightningAdminLinks.user.js
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
			'<span style="color:#000000;font-weight:bold;padding:0px;margin-top:3px;"><a href="/" style="color:#000000;">Home</a>&nbsp;|&nbsp;' +
			'<a href="/lightning/setup/SetupOneHome/home" style="color:#000000;">Setup</a>&nbsp;|&nbsp;' +
			'<a target="_blank" href="chrome-extension://hpijlohoihegkfehhibggnkbjhoemldh/data-export.html?host=mathworks.my.salesforce.com&query" style="color:#ff0000;">Data Export</a>&nbsp;|&nbsp;' +		
			'<a href="/lightning/setup/ObjectManager/home" style="color:#000000;">Objects</a>&nbsp;|&nbsp;' +
			'<a href="/lightning/setup/CustomSettings/home" style="color:#000000;">CS</a>&nbsp;|&nbsp;' +
			'<a href="/lightning/setup/PermSets/home" style="color:#000000;">Perm Set</a>&nbsp;|&nbsp;' +
			'<a href="/lightning/setup/ManageUsers/home" style="color:#000000;">Users</a>&nbsp;|&nbsp;' +
			'<a href="/lightning/setup/EnhancedProfiles/home" style="color:#000000;">Profiles</a>&nbsp;|&nbsp;' +
			'<a target="_blank" href="/HelpAndTrainingDoor?resource=https://help.salesforce.com/s/support&version=2" style="color:#000000;">Help</a>&nbsp;|&nbsp;' +
			'<a target="_blank" href="/_ui/common/apex/debug/ApexCSIPage" style="color:#000000;">Dev Console</a>&nbsp;|&nbsp;' +
			'<a href="/ltng/switcher?destination=classic" style="color:#000000;">Classic</a>&nbsp;|&nbsp;'
	/* Add Second Line
			'<br>'+
			'<a href="https://mathworks.lightning.force.com/" style="color:#000000;">Blank</a>&nbsp;|&nbsp;' +
			'<a href="/lightning/setup/SetupOneHome/home" style="color:#000000;">Blank</a>&nbsp;|&nbsp;' +
			'<a href="/lightning/setup/ObjectManager/home" style="color:#000000;">Blank</a>&nbsp;|&nbsp;' +
			'<a href="/lightning/setup/CustomSettings/home" style="color:#000000;">Blank</a>&nbsp;|&nbsp;' +
			'<a href="/lightning/setup/PermSets/home" style="color:#000000;">Blank</a>&nbsp;|&nbsp;' +
			'<a href="/lightning/setup/ManageUsers/home" style="color:#000000;">Blank</a>&nbsp;|&nbsp;' +
			'<a href="/lightning/setup/EnhancedProfiles/home" style="color:#000000;">Blank</a>&nbsp;|&nbsp;' +
			'<a target="_blank" href="/HelpAndTrainingDoor?resource=https://help.salesforce.com/s/support&version=2" style="color:#000000;">Blank</a>&nbsp;|&nbsp;' +
			'<a target="_blank" href="/_ui/common/apex/debug/ApexCSIPage" style="color:#000000;">Blank</a></span>&nbsp;|&nbsp;'
	*/
	/*
			//'<a href="/setup/ui/listApexTraces.apexp" style="color:#000000;">Logs</a>&nbsp;|&nbsp;' +
			//'<a href="/_ui/networks/setup/SetupNetworksPage" style="color:#000000;">Dig Ex</a>&nbsp;|&nbsp;' +
			//'<a href="/01p" style="color:#000000;">Classes</a>&nbsp;|&nbsp;' +
			//'<a href="/ui/setup/apex/ApexTestQueuePage" style="color:#000000;">Tests</a>&nbsp;|&nbsp;' +
			//'<a href="/apexpages/setup/listApexPage.apexp" style="color:#000000;">Pages</a>&nbsp;|&nbsp;' +
			//'<a href="/apexpages/setup/listAsyncApexJobs.apexp" style="color:#000000;">Jobs</a>&nbsp;|&nbsp;' +
			//'<a href="/08e" style="color:#000000;">Sched</a>&nbsp;|&nbsp;' +
			//'<a href="/_ui/platform/ui/schema/wizard/entity/CustomMetadataTypeListPage?setupid=CustomMetadata" style="color:#000000;">CMT</a>&nbsp;|&nbsp;' +
			//'<a href="/one/one.app#/settings/personal/PersonalInformation/home" style="color:#000000;">MS</a>&nbsp;|&nbsp;' +
	*/
		);
	}
	
	//waitForKeyElements("div[class='system-message level-info']", addSetupLinks);
	waitForKeyElements("div[class='slds-button-group slds-global-actions__favorites oneFavorites']", addSetupLinks);
	