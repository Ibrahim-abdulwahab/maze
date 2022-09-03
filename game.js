window.addEventListener('load', function(){
    var boundaries=document.getElementsByClassName("boundary");
    for (var i =0 ; i< boundaries.length-1; i++){
        boundaries[i].setAttribute("id","boundary"+i);
    }
    document.getElementById("boundary0").addEventListener("mouseenter", mouseEnter);
    document.getElementById("boundary1").addEventListener("mouseenter", mouseEnter);
    document.getElementById("boundary2").addEventListener("mouseenter", mouseEnter);
    document.getElementById("boundary3").addEventListener("mouseenter", mouseEnter);
    document.getElementById("boundary4").addEventListener("mouseenter", mouseEnter);
    document.getElementById("start").addEventListener("click", onClick);
    function mouseEnter(){
        for (var i=0; i<boundaries.length-1;i++){
            document.getElementById("boundary"+i).className += " youlose";}
        document.getElementById("status").innerHTML= "You Lost"
    }
    function onClick(){
        for (var i=0; i<boundaries.length-1;i++){
            document.getElementById("boundary"+i).className = "boundary";}
        document.getElementById("status").innerHTML= "Begin by moving your mouse over the 'S' "
    }
    
    var lol= document.getElementById("game");
    console.log(lol);
})

