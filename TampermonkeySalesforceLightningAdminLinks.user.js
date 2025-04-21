// ==UserScript==
// @name          Tampermonkey Salesforce Lightning Admin Links
// @description   Setup links to the top of all Lightning Salesforce pages
// @version       2.0
// @author        Sandeep Gaikwad
// @updateURL     https://github.com/sandeep-mg/Tampermonkey-Salesforce-Lightning-Admin-Links/raw/main/TampermonkeySalesforceLightningAdminLinks.user.js
// @downloadURL   https://github.com/sandeep-mg/Tampermonkey-Salesforce-Lightning-Admin-Links/raw/main/TampermonkeySalesforceLightningAdminLinks.user.js
// @match         https://*.lightning.force.com/*
// @match         https://*.salesforce-setup.com/*
// @match         https://*.salesforce-setup.com/lightning/*
// @require       https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js
// @require       https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant         GM_addStyle
// ==/UserScript==

//Thanks to https://github.com/denverquentin/salesforce-userscripts

GM_addStyle(`
    .admin-links {
        display: flex;
        flex-direction: column;
        gap: 0px;
        padding: 2px 8px;
        align-items: flex-start;
        max-height: 50px;
        font-family: 'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .admin-links .row {
        display: flex;
        gap: 1px;
    }

    .admin-links a {
        color: #333;
        text-decoration: none;
        padding: 1px 4px;
        border-radius: 2px;
        font-size: 12px;
        font-weight: bold;
        transition: all 0.10s ease;
    }

    .admin-links a:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: scale(1.10);
    }

    .admin-links .data-export {
        color: #e74c3c;
    }
`);

/* Styles for the admin navigation bar
- Container (.admin-links): Sets base styling and font stack
- Links (.admin-links a): Overrides default browser link colors
*/

/* Font-weight values:
100 - Thin
400 - Normal/Regular
700 - Bold
900 - Extra Bold

Used for:
- Creating visual hierarchy
- Emphasizing important content
- Making headlines stand out
- Improving UI navigation elements
*/
/*
-Insert your font in ".admin-links" Container
-Apple's system font
font-family: 'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
-Salesforce Lightning's default system font.
font-family: 'Salesforce Sans', Arial, sans-serif;
*/

function addSetupLinks(jNode) {
    jNode.prepend(`
        <span class="admin-links">
            <div class="row">
                <a href="/">Home</a>
                <a href="/lightning/setup/SetupOneHome/home">Setup</a>
                <a href="chrome-extension://hpijlohoihegkfehhibggnkbjhoemldh/data-export.html?host=mathworks.my.salesforce.com&query" class="data-export" target="_blank">Data Export</a>
                <a href="/lightning/setup/ObjectManager/home">Objects</a>
                <a href="/lightning/setup/CustomSettings/home">CS</a>
                <a href="/lightning/setup/PermSets/home">Perm Set</a>
                <a href="/lightning/setup/ManageUsers/home">Users</a>
                <a href="/lightning/setup/EnhancedProfiles/home">Profiles</a>
                <a target="_blank" href="/HelpAndTrainingDoor?resource=https://help.salesforce.com/s/support&version=2">Help</a>
                <a target="_blank" href="/_ui/common/apex/debug/ApexCSIPage">Dev Console</a>
                <a href="/ltng/switcher?destination=classic">Classic</a>
                <a href="/lightning/app/06m31000000xJqUAAU">Sales Console</a>
                <a href="/lightning/app/06m31000000xJtzAAE">Service Console</a>
                <a href="/lightning/setup/DataManagementCreateTestInstance/home">Sandboxes</a>
            </div>
        </span>
    `);
}

waitForKeyElements("div[class='slds-button-group-list slds-global-actions__favorites oneFavorites']", addSetupLinks);