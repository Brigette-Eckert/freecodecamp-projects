// have player choose x or o- make AI chose other
var player = ""; 
var ai = "";
var winner = "none";
var turn = 1;
//set state of each square: intially empty 
var gameboard = [{1: "empty"}, {2: "empty"}, {3: "empty"}, {4: "empty"}, {5: "empty"}, {6: 
"empty"}, {7: "empty"}, {8: "empty"}, {9: "empty"}];
//manipulate dom - to display intinal choose X or O, show gameboard during play, and then play again. 


//set win condtions

//1,5,9
//3,5,7

player = "X"; 
ai = "O";


for(i=0; i < 10; i++){
	// console.log("turn " + turn);
	//set up turns, player goes first
	if(turn%2==0){
		// console.log("computer's turn");
	} else {
		// console.log("players's turn")
	}
	turn ++; 
}

// while(winner == "none"){

// }






//check for win conditions 
if(gameboard[0] === player && gameboard[1] === player && gameboard[2] === player){
	winner = "player";
} else if(gameboard[0] === ai && gameboard[1] === ai && gameboard[2] === ai){
	winner = "computer";
}else if(gameboard[5] === player && gameboard[6] === player && gameboard[7] === player){
	winner = "player";
}else if(gameboard[5] === ai && gameboard[6] === ai && gameboard[7] === ai){
	winner = "computer";
} else if(gameboard[8] === player && gameboard[9] === player && gameboard[10] === player){
	console.log("player wins");
	winner = "player";
}else if(gameboard[8] === ai && gameboard[9] === ai && gameboard[10] === ai){
	winner = "computer";
} else if(gameboard[3] === player && gameboard[6] === player && gameboard[9] === player){
	console.log("player wins");
	winner = "player";
}else if(gameboard[3] === ai && gameboard[6] ===ai && gameboard[9] ===ai){
	winner = "computer";

} else if(gameboard[4] === player && gameboard[7] === player && gameboard[10] === player){
	console.log("player wins");
	winner = "player";
}else if(gameboard[4] === ai && gameboard[7] ===ai && gameboard[10] ===ai){
	winner = "computer";
}

console.log(gameboard[0]);



function reset(){
	gameboard=[{1: "empty"}, {2: "empty"}, {3: "empty"}, {4: "empty"}, {5: "empty"}, {6: 
"empty"}, {7: "empty"}, {8: "empty"}, {9: "empty"}];
 console.log("game reset")
}



//on click- fill in square clicked and then have computer fill in another square

//have computer pick num1-9 on turn if not occupied or keep track of avalbile squares with array and choose from that

//draw a line bewtween spaces when win condtion is met 