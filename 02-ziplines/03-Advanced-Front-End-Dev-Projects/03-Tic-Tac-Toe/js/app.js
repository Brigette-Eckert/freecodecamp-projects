// have player choose x or o- make AI chose other
var player = ""; 
var ai = "";
var winner = "none";
var turn = 1;

player = "X"; 
ai = "O";
//set state of each square: intially empty 
var gameboard = ["X", "X", "X", "", "", "", "", "", ""];
;
//manipulate dom - to display intinal choose X or O, show gameboard during play, and then play again. 

console.log(gameboard[0]);


for(i=0; i < 10; i++){
	// console.log("turn " + turn);
	//set up turns, player goes first
	if(turn%2==0){
		// console.log("computer's turn");
	} else {
		// console.log("players's turn")
	}
	checkForWinner();
	turn ++; 
}

// while(winner == "none"){

// }





function checkForWinner(){
	//check for win conditions 
//horizontal win
	if(gameboard[0] === player && gameboard[1] === player && gameboard[2] === player){
		winner = "player";
	} else if(gameboard[0] === ai && gameboard[1] === ai && gameboard[2] === ai){
		winner = "computer";
	}else if(gameboard[5] === player && gameboard[6] === player && gameboard[7] === player){
		winner = "player";
	}else if(gameboard[5] === ai && gameboard[6] === ai && gameboard[7] === ai){
		winner = "computer";
	} else if(gameboard[8] === player && gameboard[9] === player && gameboard[10] === player){
		winner = "player";
	}else if(gameboard[8] === ai && gameboard[9] === ai && gameboard[10] === ai){
		winner = "computer";
	//vertical win
	} else if(gameboard[2] === player && gameboard[5] === player && gameboard[8] === player){
		winner = "player";
	}else if(gameboard[2] === ai && gameboard[5] ===ai && gameboard[8] ===ai){
		winner = "computer";
	} else if(gameboard[3] === player && gameboard[6] === player && gameboard[9] === player){
		winner = "player";
	}else if(gameboard[3] === ai && gameboard[6] ===ai && gameboard[9] ===ai){
		winner = "computer";
	} else if(gameboard[4] === player && gameboard[7] === player && gameboard[10] === player){
		winner = "player";
	}else if(gameboard[4] === ai && gameboard[7] ===ai && gameboard[10] ===ai){
		winner = "computer";
	}
	//diagonal win
	else if(gameboard[2] === player && gameboard[6] === player && gameboard[10] === player){
		winner = "player";
	}else if(gameboard[2] === ai && gameboard[6] ===ai && gameboard[10] ===ai){
		winner = "computer";
	} else if(gameboard[4] === player && gameboard[6] === player && gameboard[8] === player){
		winner = "player";
	}else if(gameboard[4] === ai && gameboard[6] ===ai && gameboard[7] ===ai){
		winner = "computer";
	}
	console.log(winner);
}



function reset(){
	gameboard=[{1: "empty"}, {2: "empty"}, {3: "empty"}, {4: "empty"}, {5: "empty"}, {6: 
"empty"}, {7: "empty"}, {8: "empty"}, {9: "empty"}];
 console.log("game reset")
}



//on click- fill in square clicked and then have computer fill in another square

//have computer pick num1-9 on turn if not occupied or keep track of avalbile squares with array and choose from that

//draw a line bewtween spaces when win condtion is met 