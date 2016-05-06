var player = "O"; 
var ai = "X";
var winner, gameboard, playing;
// have player choose x or o- make AI chose other

//find way to assign array to match sq so sq+num = gameboard[num]
//manipulate dom - to display intinal choose X or O, show gameboard during play, and then play again. 

//players = {
//	"X": "Player",
//  "O": "Computer"
//}
// e.g. players["X"] => "Player"


function reset(){
	setTimeout(function() {
		start();
		$('.square').removeClass("glow");
	 	console.log("game reset");
	 	$('.square').html("");
	}, 3000);
};

function start() {
	$('#symbol-' + player).addClass('glow');
	gameboard = ["", "", "", "", "", "", "", "", ""];
	playing = true;
	winner = "none";

}

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


function checkForWinner(board){
	// Check for win conditions 
	var winCon = [
		// Horizontal
		[0, 1, 2], 
		[3, 4, 5],
		[6, 7, 8],
		// Vertical
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		// Diagonal
		[0, 4, 8],
		[2, 4, 6],
	];
	for(var i=0; i<winCon.length; i++) {
		var cond = winCon[i];
		// If all three are equal and not blank
		if(board[cond[0]] !== ""  && board[cond[0]] === board[cond[1]] && board[cond[1]] === board[cond[2]]) {
			winner = board[cond[0]];
			playing = false;
			$('#sq'+ cond[0]).addClass('glow');
			$('#sq'+ cond[1]).addClass('glow');
			$('#sq'+ cond[2]).addClass('glow');
			console.log(winner + " Wins!");
			reset();
			break;
		}
	}
};


$("#gameboard").click(function(e){
	//end game when winner delcared 
	if(!playing) return;
	console.log("players's turn");
	var playerPick = (e.target.id).slice(2);
	console.log(playerPick);
	var playerSelector = "#sq" + playerPick;
	if(gameboard[playerPick] != ""){
	   //player doesn't lose turn if invalid entry 
		return;
	};
	if(gameboard[playerPick] == "") {
		gameboard[playerPick] = player;
		console.log(gameboard);
		$(playerSelector).html(player);
	}; 

	checkForWinner(gameboard); 
	if(playing){
		aiTurn(); 
		checkForWinner(gameboard);
	}
});



start();
    	

//draw a line bewtween spaces when win condtion is met or sass animation - glow/flash etc 