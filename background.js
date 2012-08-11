chrome.webRequest.onHeadersReceived.addListener(
  function(details) {
   for (var i = 0; i < details.responseHeaders.length; ++i) {
     if (details.responseHeaders[i].name === 'Content-Disposition') {
       details.responseHeaders[i].value = details.responseHeaders[i].value.replace("attachment","inline");
       break;
     }
   }

   return {cancel: false, responseHeaders: details.responseHeaders};
  },
  {urls: ["*://*.friendfeed-media.com/*"]},
  ["blocking","responseHeaders"]);


