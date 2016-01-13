//store entry until = button is pressed
//on click add the proper number or fuction
//convert buildString to Number before using operators 
var buildString = "";
var runningTotal = ""; 
//running total will hold the whole nummber until presssing equal

//set display up
$("#display").html(buildString);

//Number Buttons
$(".num").click(function(e){
  buildString += e.target.innerHTML;
  $("#display").html(buildString);
  
});




//Clear Buttons

$("#all_clear").click(function(){
  buildString = "";
  $("#display").html(buildString);
  console.log("all clear")
});

$("#clear_screen").click(function(){
  $("#display").html("");
  console.log("screen cleared");
  console.log(buildString);
});





//click ce to clear current screen but not build string