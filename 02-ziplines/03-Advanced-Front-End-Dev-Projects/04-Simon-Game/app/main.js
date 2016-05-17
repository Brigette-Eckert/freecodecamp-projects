"use strict";

//defaults
var count = 0;
var simonMoves = [];
var playerMoves = [];
var mode = "casual";
var audio1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var audio2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var audio3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var audio4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

//game button events
$("#start-btn").click(function () {
  start();
});

$("#reset-btn").click(function () {
  reset();
});

$("#green").click(function () {
  playerMoves.push("green");
  audio1.play();
  console.log(playerMoves);
});

$("#red").click(function () {
  playerMoves.push("red");
  audio2.play();
  console.log(playerMoves);
});

$("#yellow").click(function () {
  playerMoves.push("yellow");
  audio3.play();
  console.log(playerMoves);
});

$("#blue").click(function () {
  playerMoves.push("blue");
  audio4.play();
  console.log(playerMoves);
});

//if checkbox checked run strict, if its toggled to uncheck it- run reset
$(".slider").click(function () {
  console.log("slider clicked");
  //default state is checked
  $("input:checked").length == 0 ? strictOn() : reset();
});

//starts the game
var start = function start() {
  console.log("game started");
  turn();
};

//reset the game
var reset = function reset() {
  count = 0;
  simonMoves = [];
  playerMoves = [];
  console.log("game reset");
};

//strict  mode;
var strictOn = function strictOn() {
  count = 0;
  simonMoves = [];
  playerMoves = [];
  mode = "strict";
  console.log("strict mode on");
  start();
};

var turn = function turn() {
  var board = ["green", "red", "yellow", "blue"];
  //reset player moves at beginning of each new turn
  playerMoves = [];
  $(".count").html(count);

  //set each square 1-4, have computer pick random number and add to array of moves.
  //use index of to pick
  //green = 0;
  //red =1;
  //yellow =2;
  //blue =3;

  //loop over array to display moves

  //store user moves in array- check for match- if match add +1 to count, if count == 20 then user wins

  //have user repeat, if user fails -repeat or if in strict mode, reset to one
};

var win = function win() {};