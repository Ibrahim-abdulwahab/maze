window.addEventListener('load', function(){

    //Gives each div that has a classname of boundary an id of boundary and a corresponding number.
    //It does this by putting all the divs in an array and using a for loop to set the id attribute
    var boundaries=document.getElementsByClassName("boundary");
    for (var i =0 ; i< boundaries.length-1; i++){
        boundaries[i].setAttribute("id","boundary"+i);
    }
    var score=0;
    //n siginfies that a round has ended so that the user doesn't lose more points while going to start a new round.
    //it also stops the player from cheating by going to the end zone multiple times in a row.
    var n=0;
    var time=60000;
    //The div that is has a class called boundary example is where we will keeping our score
    print=document.getElementsByClassName("boundary example")
    //We prompt the user for a name and insert it in the header.If the user doesn't input a name. We default to player
    var user=prompt("Please enter your name","type here");
    if (user != null) {
        document.getElementById("status").innerHTML ="Hello " + user + "! To start move your mouse to the S";
      }
    else{
        user="Player";
        document.getElementById("status").innerHTML ="Hello " + user + "! To start move your mouse to the S";
    }
    
    //Since the game is a maze game,the main goal is so that the user doesn't touch the walls.This is why these functions activate when
    //the mouse enters the dive
    document.getElementById("boundary0").addEventListener("mouseenter", losing);
    document.getElementById("boundary1").addEventListener("mouseenter", losing);
    document.getElementById("boundary2").addEventListener("mouseenter", losing);
    document.getElementById("boundary3").addEventListener("mouseenter", losing);
    document.getElementById("boundary4").addEventListener("mouseenter", losing);
    document.getElementById("start").addEventListener("mouseenter", starting);
    document.getElementById("start").addEventListener("click", onClick);
    document.getElementById("end").addEventListener("mouseenter", winning);

    //This function resets the divs with id boundary to the original call boundary (because if a player lost then we need to change the color back)
    
    function starting(){
        for (var i=0; i<boundaries.length-1;i++){
            document.getElementById("boundary"+i).className = "boundary";}
        document.getElementById("status").innerHTML="Hello " + user + "! To start move your mouse to the S";
        //If the player decides to cheat and go around the maze then they immediatly lose.the function losing activates when theb player
        //leaves the big div game.
        document.getElementById("game").addEventListener("mouseleave", losing);
        mytime=window.setTimeout(losing,time)
        n=0;
    }
    //Resets the score and timer
    function onClick(){
        score=0;
        time=60000;
        print[0].innerHTML=score;
    }
    //This function status changes the class of the divs that have the boundary id to the youlose class,changes the status and
    //gives a score penalty
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
    //This function changes the status and increases the score
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
    //function save(){
      //  localStorage.setItem(user,score)
    //}


})

