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

var boundaries=document.getElementsByClassName("boundary");
for (var i =0 ; i< boundaries.length; i++){
    boundaries[i].setAttribute("id","boundary"+i);
}
var element= document.getElementById("game");
console.log(element);