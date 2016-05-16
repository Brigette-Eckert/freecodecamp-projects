//setting defaults
let count =0; 
let moves =[];
let mode = "casual";



//starts the game
let start = () => {console.log("game started"); 
turn();
};

//reset the game
let reset = () => {
  count = 0; 
  moves = [];
  console.log("game reset");
};

//strict  mode;
let strictOn =() => {
  count = 0; 
  moves = [];
  mode = "strict";
  console.log("strict mode on");
};

let strictOff =() => mode = "causal";

let turn = () => {
const board = ["green", "red", "yellow", "blue"];
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



let win = () => {
  

};


$("#start-btn").click(function() {
  start();
});


$("#reset-btn").click(function() {
  reset();
});


$(".slider").click(function(){
    console.log("slider clicked");
    //default state is checked 
     if($("input:checked").length == 0){
        strictOn();
     } else {
       reset();
     };

    //? (true block) : (else block)



//if checkbox checked = run Strict -

// if toggled to uncheck - run reset 
})