window.addEventListener('load', function(){
    var boundaries=document.getElementsByClassName("boundary");
    for (var i =0 ; i< boundaries.length-1; i++){
        boundaries[i].setAttribute("id","boundary"+i);
    }
    for (var i=0; i<boundaries.length-1;i++){
        document.getElementById("boundary"+i).className += " youlose";
    }
    var lol= document.getElementById("game");
    console.log(lol);
})

