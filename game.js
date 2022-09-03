window.addEventListener('load', function(){
    var boundaries=document.getElementsByClassName("boundary");
    for (var i =0 ; i< boundaries.length; i++){
        boundaries[i].setAttribute("id","boundary"+i);
    }
    //document.getElementById("boundary0").className = "youlose";
    
    var lol= document.getElementById("game");
    console.log(lol);
})

