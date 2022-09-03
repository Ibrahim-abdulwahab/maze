window.addEventListener('load', function(){
    var boundaries=document.getElementsByClassName("boundary");
    for (var i =0 ; i< boundaries.length-1; i++){
        boundaries[i].setAttribute("id","boundary"+i);
    }
    var score=0;
    document.getElementById("boundary0").addEventListener("mouseenter", mouseEnter);
    document.getElementById("boundary1").addEventListener("mouseenter", mouseEnter);
    document.getElementById("boundary2").addEventListener("mouseenter", mouseEnter);
    document.getElementById("boundary3").addEventListener("mouseenter", mouseEnter);
    document.getElementById("boundary4").addEventListener("mouseenter", mouseEnter);
    document.getElementById("start").addEventListener("mouseenter", mouseEnter3);
    document.getElementById("start").addEventListener("click", onClick);
    document.getElementById("end").addEventListener("mouseenter", mouseEnter2);
        
    function mouseEnter(){
        for (var i=0; i<boundaries.length-1;i++){
            document.getElementById("boundary"+i).className += " youlose";}
        document.getElementById("status").innerHTML= "You Lost"
        score=score-10;    
    }
    function mouseEnter3(){
        for (var i=0; i<boundaries.length-1;i++){
            document.getElementById("boundary"+i).className = "boundary";}
        document.getElementById("status").innerHTML= "Begin by moving your mouse over the 'S' "
    }
    function onClick(){
        score=0;
    }
    function mouseEnter2(){
        document.getElementById("status").innerHTML= "You Won"
        score=score+5
    }
    var lol= document.getElementById("game");
    console.log(lol);
})

