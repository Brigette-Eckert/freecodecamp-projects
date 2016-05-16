"use strict";

//setting defaults
var count = 0;
var moves = [];
var mode = "casual";

//starts the game
var start = function start() {
  console.log("game started");
  turn();
};

//reset the game
var reset = function reset() {
  count = 0;
  moves = [];
  console.log("game reset");
};

//strict  mode;
var strictOn = function strictOn() {
  count = 0;
  moves = [];
  mode = "strict";
  console.log("strict mode on");
};

var strictOff = function strictOff() {
  return mode = "causal";
};

var turn = function turn() {
  var board = ["green", "red", "yellow", "blue"];
  console.log(board);
  $(".count").html(count);
  //set each square 1-4, have computer pick random number and add to array of moves.
  //use index of
  //green = 0;
  //red =1;
  //yellow =2;
  //blue =3;

  //loop over array to display moves

  //store user moves in array- check for match- if match add +1 to count, if count == 20 then user wins

  //have user repeat, if user fails -repeat or if in strict mode, reset to one
};

var win = function win() {};

$("#start-btn").click(function () {
  start();
});

$("#reset-btn").click(function () {
  reset();
});

$(".slider").click(function () {
  console.log("slider clicked");
  //default state is checked
  if ($("input:checked").length == 0) {
    strictOn();
  } else {
    reset();
  };

  //? (true block) : (else block)

  //if checkbox checked = run Strict -

  // if toggled to uncheck - run reset
});