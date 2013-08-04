function changeHeaders(details) {
	var isDisabled = getOption(OPTION_KEYS.OPT_EXTENSION_DISABLED);

	if (!isDisabled) {
		for (var i = 0; i < details.responseHeaders.length; ++i) {
			if (details.responseHeaders[i].name === 'Content-Disposition') {
				details.responseHeaders[i].value = details.responseHeaders[i].value.replace("attachment", "inline");
				break;
			}
		}
	}

	return {
		cancel: false,
		responseHeaders: details.responseHeaders
	}
}

function checkForValidUrl(tabId, changeInfo, tab) {
	if (tab.url.indexOf('friendfeed.com') > -1 || tab.url.indexOf('friendfeed-media.com') > -1) {
		chrome.pageAction.show(tabId);
		refreshPageActionIcon();
	}
};


chrome.tabs.onUpdated.addListener(checkForValidUrl);
chrome.webRequest.onHeadersReceived.addListener(changeHeaders, {
	urls: ["*://*.friendfeed-media.com/*"]
}, ["blocking", "responseHeaders"]);
