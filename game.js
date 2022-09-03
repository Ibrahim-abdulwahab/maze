function downloadJSAtOnload() {//since the script is in the head, 
    //I need a way to access the elements after it.To do so I used this function.
    var element = document.createElement("script");
    element.src = "game.js";
    document.body.appendChild(element);
}

if (window.addEventListener)
    window.addEventListener("load", downloadJSAtOnload, false);
else if (window.attachEvent)
    window.attachEvent("onload", downloadJSAtOnload);
else window.onload = downloadJSAtOnload;

var element=document.getElementById("status");
console.log(element);