window.onload = function () {
    document.getElementById("insertIframe").addEventListener("click", insertIframe);
    document.getElementById("executeJavaScript").addEventListener("click", executeJavaScript);
}
function insertIframe() {
    chrome.tabs.executeScript({file: "scripts/insertIframe.js"});
}
function executeJavaScript() {
    chrome.tabs.executeScript({file: "scripts/executeJavaScript.js"});
}