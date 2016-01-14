//store entry until = button is pressed
//on click add the proper number or fuction
//convert buildString to Number before using operators 
var buildString = "";
var runningTotal = ""; 
//running total will hold the whole nummber until presssing equal

//Number Buttons
$(".num").click(function(e){
  var num = e.target.innerHTML;
  buildString += num;
  runningTotal += num; 
  console.log("the total is " + runningTotal);
  $("#display").html(buildString);
});

//Clear Buttons

$("#all_clear").click(function(){
  buildString = "";
   runningTotal = "";
  $("#display").html(buildString);
  console.log("all clear")
});

$("#clear_screen").click(function(){
  $("#display").html("");
  buildString = "";
  console.log("screen cleared");
  console.log(buildString);
});

//Ops 

$(".op").click(function(e){
  var op = e.target.innerHTML;
  buildString = op;
  runningTotal += op; 
  $("#display").html(buildString);
});

$("#add").click(function(){
   runningTotal += "+";
    buildString = "+";
    $("#display").html(buildString);
  
});

$("#percent").click(function(){
  if(runningTotal.indexOf("%") == -1) {
    buildString += "%";
    runningTotal += "/100"; 
  } else {
    console.log("there is already a percent sign")
  }
    $("#display").html(buildString);
});


$("#decimal").click(function(){
  if(runningTotal.indexOf(".") == -1 && runningTotal.indexOf("%") == -1)  {
    buildString += ".";
    runningTotal += "."; 
  } else {
    console.log("can't add a decimal here")
  }
    $("#display").html(buildString);
});

$("#equal").click(function(){
  //parseInt or use mathEval
  try {
   var finalVal = eval(runningTotal);
   $("#display").html(finalVal);
  } catch(err) {
     $("#display").html("Error");
    }
    //reset
    buildString = "";
    runningTotal = "";
});

