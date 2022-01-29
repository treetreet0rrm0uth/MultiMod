if (confirm("WARNING! Executing malicious JavaScript can lead to attackers having access to your data. Only execute JavaScript if you know what the script does. Press OK to continue, Cancel to exit.") == true) {
    var script = prompt("Enter JavaScript to be executed");
    var final = eval(script);
    alert("JavaScript successfully executed!");
    chrome.tabs.executeScript({code: final});
}
