


//
// var ranBox = $(".btn");
// var currentBox = $(ranBox[Math.floor(Math.random()*4)]);
// setInterval (function(){
// $(currentBox).addClass("select")
// setTimeout (function(){
//   $(currentBox).removeClass("select")
// },1000)
// } , 1000);
//


alert("Hello");
var buttonColours = ["red" , "blue" , "yellow" , "green"];
var gamePattern = [];
function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  console.log(randomNumber);
  var randomChosenColour = buttonColours[randomNumber];
  console.log(buttonColours[randomNumber]);
  // $("#"+randomChosenColour).addClass("select");
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
  var audio = new Audio ("sounds/"+randomChosenColour+".mp3" "autoplay");
  console.log(audio);
  audio.play();
}

nextSequence();
