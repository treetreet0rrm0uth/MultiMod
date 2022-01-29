window.onload = function () {
    document.getElementById("insertIframe").addEventListener("click", insertIframe);
    document.getElementById("executeJavaScript").addEventListener("click", insertIframe);
}
function insertIframe() {
    chrome.tabs.executeScript({file: "insertIframe.js"});
    chrome.tabs.executeScript({file: "executeJavaScript.js"})
}