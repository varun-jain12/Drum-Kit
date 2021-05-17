  var len = document.querySelectorAll(".drum").length;
 
// mouse clicked event 

  for(var i=0 ; i< len; ++i){
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var selectbut = this.innerHTML;
       makesound(selectbut);
       buttonAnimation(selectbut);

     } );
  }

  // keypress event

  document.addEventListener("keydown",function(event){ 
    makesound(event.key);
    buttonAnimation(selectbut);
  });

  // function to make sound 

function makesound( value ){
  switch(value)
  {
    case "w" : var audiow = new Audio("sounds/crash.mp3");
              audiow.play();
              break;
    
    
    case "a" : var audioa = new Audio("sounds/kick-bass.mp3");
              audioa.play();
              break;

    case "s" : var audios = new Audio("sounds/snare.mp3");
              audios.play();
              break; 
              
    case "d" : var audiod = new Audio("sounds/tom-1.mp3");
              audiod.play();
              break;

    case "j" : var audioj = new Audio("sounds/tom-2.mp3");
              audioj.play();
              break; 
              
    case "k" : var audiok = new Audio("sounds/tom-3.mp3");
              audiok.play();
              break;

    case "l" : var audiol = new Audio("sounds/tom-4.mp3");
              audiol.play();
              break;
  }
}

//function for animation

function buttonAnimation(drumtapped){
  var activeButton = document.querySelector("."+ drumtapped);
  activeButton.classList.add("pressed");

  setTimeout( function(){
    activeButton.classList.remove("pressed");
  }, 150);
}