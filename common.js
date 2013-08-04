var OPTION_KEYS = {
    OPT_EXTENSION_DISABLED: "OPT_EXTENSION_DISABLED"
};

function saveOption(optionKey, value) {
    localStorage[optionKey] = value;
}

function getOption(optionKey) {
    var result = localStorage[optionKey];
    if (result == "false") result = false;
    if (result == "true") result = true;
    return result;
}

function refreshPageActionIcon(){
    var isDisabled = getOption(OPTION_KEYS.OPT_EXTENSION_DISABLED);
    var icon = isDisabled ? 'icon-16-disabled.png':'icon-16.png';

    chrome.tabs.getSelected(null,function(tab) {
                            chrome.pageAction.setIcon({path: icon,tabId: tab.id});
                            });
}