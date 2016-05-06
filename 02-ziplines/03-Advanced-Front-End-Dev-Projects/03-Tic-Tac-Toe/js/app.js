var player = ""; 
var ai = "";
var winner = "none";
var gameboard = ["", "", "", "", "", "", "", "", ""];
var playing = true;




// have player choose x or o- make AI chose other

//find way to assign array to match sq so sq+num = gameboard[num]
//manipulate dom - to display intinal choose X or O, show gameboard during play, and then play again. 

player = "X"; 
ai = "O";

function aiTurn(){
	console.log("computer's turn");
	//have computer pick num0-8 on turn if not occupied or keep track of available squares with array and choose from that
	var aiPick= (Math.floor(Math.random() * 9));
	var aiSelector = "#sq" + aiPick;
	// console.log(aiPick);
	if(gameboard[aiPick] == ""){
		gameboard[aiPick] = ai;
		console.log(gameboard);
		$(aiSelector).html(ai);
			//find way to reroll if AI selets already taken spot
		}; 
};


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

	if(winner == "player"){
		playing = false;
		console.log("Congrats you win");
		return winner;
	} else if(winner == "computer"){
		playing = false;
		console.log("Computer wins");
		return winner;
	}
	
};


function reset(){
	var gameboard = ["", "", "", "", "", "", "", "", ""];
 	console.log("game reset")
};





$("#gameboard").click(function(e){
	var playerPick = (e.target.id);
	var playerSelector = "#"+playerPick;
	console.log(playerPick);
	$(playerSelector).html(player);
	// console.log("players's turn");
	//have player take turn
	// console.log("click");
	checkForWinner(); 
	aiTurn(); 
	checkForWinner();
	});


    	

//draw a line bewtween spaces when win condtion is met or sass animation - glow/flash etc 