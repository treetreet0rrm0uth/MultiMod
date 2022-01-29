window.onload = function () {
    document.getElementById("insertIframe").addEventListener("click", insertIframe);
    document.getElementById("executeJavaScript").addEventListener("click", executeJavaScript);
    document.getElementById("blooketButton").addEventListener("click", blooket);
    document.getElementById("return").addEventListener("click", home);
}
function insertIframe() {
    chrome.tabs.executeScript({file: "scripts/insertIframe.js"});
}
function executeJavaScript() {
    chrome.tabs.executeScript({file: "scripts/executeJavaScript.js"});
}