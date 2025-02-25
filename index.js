// detecting button press
document.addEventListener("DOMContentLoaded", function() {
    var no = document.querySelectorAll(".drum").length;
    for (var i = 0; i < no; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function () {
         var buttonInnerHTML= this.innerHTML;

         makesound(buttonInnerHTML);
          
          buttonAnimation(buttonInnerHTML);

        });
    }

    // detecting keyboard press
    document.addEventListener("keypress",function(event){

        makesound(event.key);
        buttonAnimation(event.key);
       
    });

    function makesound(key){

        switch(key){
         case "w":
         var tom1=new Audio("sounds/sounds_tom-1.mp3");
          tom1.play();
          break;
           case "a":
         var tom2=new Audio("sounds/sounds_tom-2.mp3");
          tom2.play();
          break;

          case "s":
         var tom3=new Audio("sounds/sounds_tom-3.mp3");
          tom3.play();
          break;

      case "d":
         var tom4=new Audio("sounds/sounds_tom-4.mp3");
          tom4.play();
          break;

      case "j":
         var snare=new Audio("sounds/sounds_snare.mp3");
          snare.play();
          break;

              case "k":
         var crash=new Audio("sounds/sounds_crash.mp3");
          crash.play();
          break;

              case "l":
         var kick=new Audio("sounds/sounds_kick-bass.mp3");
          kick.play();
          break;


      default: console.log(buttonInnerHTML);

          }
    }

    function buttonAnimation(currentkey){
        var activebutton=document.querySelector("." + currentkey);
        activebutton.classList.add("pressed");

        setTimeout(function(){
             activebutton.classList.remove("pressed");}, 300);
    }

});



