let count; 
let moves;
let mode;


//change functions to arrow functions
//starts the game 
let start = () => {console.log("game started"); 
turn();
};

let reset = () => {
	count = 0; 
	moves = [];
	mode = "casual";
};

let strictOn =() => {
	count = 0; 
	moves = [];
	mode = "strict"
};


let turn = () => {
const board = ["green", "red", "yellow", "blue"];
console.log(board);
$("#count-display").html(count);
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



start();
