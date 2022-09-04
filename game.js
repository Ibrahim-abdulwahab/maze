window.addEventListener('load', function(){
    var boundaries=document.getElementsByClassName("boundary");
    for (var i =0 ; i< boundaries.length-1; i++){
        boundaries[i].setAttribute("id","boundary"+i);
    }
    var score=0;
    var n=0;
    var time=60000;
    var user=prompt("Please enter your name","type here")
    if (user != null) {
        document.getElementById("status").innerHTML ="Hello " + user + "! To start move your mouse to the S";
      }
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
        document.getElementById("status").innerHTML="Hello " + user + "! To start move your mouse to the S";
        document.getElementById("game").addEventListener("mouseleave", losing);
        mytime=window.setTimeout(losing,time)
        n=0;
    }
    function onClick(){
        score=0;
        print[0].innerHTML=score;
    }
    function losing(){
        window.clearTimeout(mytime)
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
        window.clearTimeout(mytime)
        time=time-5000 //the more the player wins,the more the game becomes tougher. This is how I implement
        //level system
        if (n==0){
        document.getElementById("status").innerHTML= "You Won"
        score=score+5;
        n=1;
        print[0].innerHTML=score;}
    }

})

