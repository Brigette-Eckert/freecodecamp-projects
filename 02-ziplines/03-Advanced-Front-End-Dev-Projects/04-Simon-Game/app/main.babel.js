//defaults

let count =0;
let simonMoves = []; 
let playerMoves =[];
let mode = "casual";
let playBack;
let audio0 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
let audio1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
let audio2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
let audio3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
const audio =   [audio0, audio1, audio2, audio3];
const board = ["green", "red", "yellow", "blue"];


//game button events
$("#start-btn").click(function() {
  start();
});


$("#reset-btn").click(function() {
  reset();
});


$("#green").click(function(){
  playerMoves.push("green");
  audio0.play();
  $("#green").toggleClass('lightup');
  setTimeout(function(){
    $("#green").toggleClass('lightup');
  }, 1000);
    console.log(playerMoves);
});

$("#red").click(function(){
  playerMoves.push("red");
  audio1.play();
  $("#red").toggleClass('lightup');
   setTimeout(function(){
    $("#red").toggleClass('lightup');
  }, 1000);
    console.log(playerMoves);
});

$("#yellow").click(function(){
  playerMoves.push("yellow");
  audio2.play();
  $("#yellow").toggleClass('lightup');
   setTimeout(function(){
    $("#yellow").toggleClass('lightup');
  }, 1000);
   console.log(playerMoves);
});

$("#blue").click(function(){
  playerMoves.push("blue");
  audio3.play();
  $("#blue").toggleClass('lightup');
   setTimeout(function(){
    $("#blue").toggleClass('lightup');
  }, 1000);
   console.log(playerMoves);
});

 //if checkbox checked run strict, if its toggled to uncheck it- run reset
$(".slider").click(function(){
    console.log("slider clicked");
    //default state is checked 
    $("input:checked").length ==0 ? strictOn() : reset()
});


//starts the game
let start = () => {
  console.log("game started");
  count =5;
  simonMoves = [];
  playerMoves = [];
  clearInterval(playBack);
  turn();
};

//reset the game
let reset = () => {
  count = 0; 
  simonMoves = [];
  playerMoves = [];
  clearInterval(playBack);
  console.log("game reset");
};

//strict  mode;
let strictOn =() => {
  count = 0; 
  simonMoves = [];
  playerMoves = [];
  mode = "strict";
  console.log("strict mode on");
  start();
};


let turn = () => {
  count ++;
  //reset player moves at beginning of each new turn
  playerMoves = [];
  $(".count").html(count);
  //picking number between 0-3 to represent board index
  let simonChoice = Math.floor(Math.random() * (3 - 0 + 1));
  simonMoves.push(simonChoice);
  let simonAudio = audio[simonChoice];
  let simonColor = board[simonChoice];
  let simonColorSelector = "#"+simonColor;
  console.log("simon chooses " + simonColor);
  simonAudio.play();

  
  //loop over array to display moves 

  //store user moves in array- check for match- if match add +1 to count, if count == 20 then user wins

  //have user repeat, if user fails -repeat or if in strict mode, reset to one






  //use setinvertal for the color change animation -and audio play 

  //trying to get clear interval function to run only after set playBack has run correct number of times, not before 
  //set interval replaces for loop - so don't need it 

    playBack = setInterval(function(){
      console.log(simonMoves);
      simonAudio.play();
      console.log(simonColorSelector);
      $(simonColorSelector).toggleClass('lightup');
    }, 2000);

};

  // clearInterval(playBack);



let win = () => {
  

};


//call turn everytime count is increased
//while playing == true? , playing == false if get to 20 -but have user turn time and the comapre. -user turn vs ai turn with set invertal? -like pom clock

