var s = document.createElement('script');
s.src = chrome.runtime.getURL('popup.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
window.onload = function () {
    document.getElementById("button").addEventListener("click", insertIframe());
}
function insertIframe() {
    if(document.URL.includes("schoology.com")) {
        var iFrame = document.createElement("iframe");
        iFrame.src = prompt("Enter the website link for the iFrame");
        iFrame.width = `${prompt("Enter width (pixels)")}px`;
        iFrame.height = `${prompt("Enter width (height)")}px`;
        document.getElementById("edit-body_ifr").contentDocument.getElementById("tinymce").appendChild(iFrame);
        alert("iFrame succesfully created!");
    }
}
