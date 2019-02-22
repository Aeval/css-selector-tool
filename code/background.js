chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(null, { file: "jquery-2.2.min.js" });
    chrome.tabs.executeScript(null, { file: "jquery-ui.min.js" });
    //chrome.tabs.executeScript(null, { file: "nScript.js" });
    //chrome.tabs.executeScript(null, { file: "nScript2.js" });
    //chrome.tabs.executeScript(null, { file: "nScript3.js" });
    //chrome.tabs.executeScript(null, { file: "nScript4.js" });
    //chrome.tabs.executeScript(null, { file: "nScript5.js" });
    chrome.tabs.executeScript(null, { file: "nScript6.js" });
});
