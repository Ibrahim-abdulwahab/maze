window.addEventListener('load', function(){
    var boundaries=document.getElementsByClassName("boundary");
    for (var i =0 ; i< boundaries.length-1; i++){
        boundaries[i].setAttribute("id","boundary"+i);
    }
    var score=0;
    var n=0;
    print=document.getElementsByClassName("boundary example")
    document.getElementById("boundary0").addEventListener("mouseenter", losing);
    document.getElementById("boundary1").addEventListener("mouseenter", losing);
    document.getElementById("boundary2").addEventListener("mouseenter", losing);
    document.getElementById("boundary3").addEventListener("mouseenter", losing);
    document.getElementById("boundary4").addEventListener("mouseenter", losing);
    document.getElementById("start").addEventListener("mouseenter", starting);
    document.getElementById("start").addEventListener("click", onClick);
    document.getElementById("end").addEventListener("mouseenter", winning);

    function starting(){
        for (var i=0; i<boundaries.length-1;i++){
            document.getElementById("boundary"+i).className = "boundary";}
        document.getElementById("status").innerHTML= "Begin by moving your mouse over the 'S' "
        document.getElementById("game").addEventListener("mouseleave", losing);
        n=0;
    }
    function onClick(){
        score=0;
        print[0].innerHTML=score;
    }
    function losing(){
        if (n==0){
        for (var i=0; i<boundaries.length-1;i++){
            document.getElementById("boundary"+i).className += " youlose";}
        document.getElementById("status").innerHTML= "You Lost"
        score=score-10;
        print[0].innerHTML=score;
        n=1;
        }        
    }
    function winning(){
        if (n==0){
        document.getElementById("status").innerHTML= "You Won"
        score=score+5;
        n=1;
        print[0].innerHTML=score;}
    }
    
    
    var lol= document.getElementById("game");
    console.log(lol);
})

