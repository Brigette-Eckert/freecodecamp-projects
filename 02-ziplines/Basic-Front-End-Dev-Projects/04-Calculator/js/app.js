//store entry until = button is pressed
//on click add the proper number or fuction
var buildString = "Hello World";

//set display up
$("#display").html(buildString);


function numClick(num) {
      buildString += num
      console.log("display should be" + buildString)
}
//click 1 

$("#1").click(function(){
  numClick(1)
  console.log("click")
});


//click ac to clear all
//
//build_string = "";


//click ce to clear current screen but not build string