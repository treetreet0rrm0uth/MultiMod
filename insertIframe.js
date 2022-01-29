if(document.URL.includes("schoology.com")) {
    var iFrame = document.createElement("iframe");
    iFrame.src = prompt("Enter the website link");
    iFrame.width = `${prompt("Enter width (in pixels)")}px`;
    iFrame.height = `${prompt("Enter height (in pixels)")}px`;
    document.getElementById("edit-body_ifr").contentDocument.getElementById("tinymce").appendChild(iFrame);
    alert("iFrame succesfully created!");
}else {
    alert("Not a schoology page!");
}