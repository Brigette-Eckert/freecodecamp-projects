//set initinal vars 
var workTime = 25;
var breakTime =  5;
//set inner html to respective varibles
$("p.workInt").html(workTime);
$("p.breakInt").html(breakTime);

$('#addWork').click(function(){
  //on + button click add 1 to Work     interval
   workTime +=1;
  $("p.workInt").html(workTime);
  console.log(workTime);
}); 

$('#minusWork').click(function(){
  //on - button click subtract 1 to Work interval
    workTime -=1;
  if(workTime >= 0) {
  $("p.workInt").html(workTime);
  console.log(workTime);
  } else {
    workTime = 0;
  }
}); 

$('#addBreak').click(function(){
   //on + button click add 1 to Break     interval
   breakTime +=1;
  //dry out
  $("p.breakInt").html(breakTime);
  console.log(breakTime);
}); 


$('#minusBreak').click(function(){
  //on - button click subtract one from break interval
    breakTime -=1;
  if(breakTime >=0){
  $("p.breakInt").html(breakTime);
  console.log(breakTime);
  } else {
    breakTime = 0;
  }
}); 

//click to start and stop clock
//set time interval
//rest button
//reset clock when work timer changed 
