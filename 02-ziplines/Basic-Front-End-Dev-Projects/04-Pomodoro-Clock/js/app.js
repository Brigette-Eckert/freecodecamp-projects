//set init var
//times in seconds 
var time = {
  work: 1500,
  break: 300,
};

var count = time.work;
  //storing function in var to be able to stop timer
var timer ;
var audio = new Audio('255101__soneproject__jingle2.wav');
//set inner html to respective varibles
$("p.workInt").html(time.work);
$("p.breakInt").html(time.break);
$("p.type").html("Work");
$("#start-stop").html("Start");
$("p.counter").html(count);

function timeDisplay(timeInput){
  //Take in seconds and returns string xx:xx
  var minCon = timeInput/60
  var min = (Math.floor(minCon)).toString();
  var sec = (timeInput%60).toString();
  //adding 0s if second or min is only one char long
  if(min.length == 1 && sec.length != 1){
    console.log("min padding added");
    var paddedMin = "0" + min;
    var timeOutput =  paddedMin + ":" + sec;
  }else if(sec.length == 1 && min.length != 1){
    console.log("sec padding added");
    var paddedSec= "0" + sec;
    var timeOutput =  min + ":" + paddedSec;
  } else if(min.length == 1 && sec.length == 1){
  console.log("both min & sec padding added")
    var paddedMin = "0" + min;
    var paddedSec= "0" + sec;
    var timeOutput =  paddedMin + ":" + paddedSec;
  }else {
  var timeOutput =  min + ":" + sec;
  };
  return timeOutput;
}
 
function addWork() {
    time.work += 1;
    count = time.work;
    // timeDisplay(count);
    $("p.workInt").html(count);
    //updating count var to change with work
    $("p.counter").html(count);
  };

function minusWork() {
    //on - button click subtract 1 to Work interval
    time.work -= 1;
    count = time.work;
    //not sure why this is coming up as undefine
    // timeDisplay(count);
     $("p.workInt").html(count);
    //avoiding non-existant and negative intervals
    if(time.work >= 1) {
      //updating count var to change with work
      $("p.workInt").html(count);
      // timeDisplay();
    } else {
      time.work = 1;
      count = time.work;
    }  
  };

function addBreak() {
    //on + button click add 1 to Break     interval
    time.break += 1;
    $("p.breakInt").html(time.break);
  };

function minusBreak() {
    //on - button click subtract one from break interval
  time.break -= 1;
  //avoiding non-existant and negative intervals
  if (time.break >= 1) {
    $("p.breakInt").html(time.break);
  } else {
    time.break = 1;
  }
};

function reset() {
    if($("#clock").hasClass("workTime") == false){
    $("#clock").addClass("workTime");
    }
    count = time.work;
    console.log("timer reset")    
    $("p.counter").html(count);
  };


function checkStatus() {
  //setting work vs break sessions
  if($("#clock").hasClass("workTime") == true) {
    $("p.type").html("Work");
      count = time.work
     $("p.counter").html(time.work);
  } else {
     $("p.type").html("Break")
      count = time.break;
  };
};


function countDown(){
    if (count >= 1) {
      count -= 1;
      console.log(count);
      $("p.counter").html(count);
    } else if(count == 0)  {
      console.log("switch")
      console.log(count)
      //play alarm
      audio.play();
       $("#clock").toggleClass("workTime");
       checkStatus();
    }
  };
  

// timeDisplay(count); 
//when calling timeDisplay function here functions break

$('#addWork').click(function(){
    addWork();
});

$('#minusWork').click(function() {
    minusWork();
});

$('#addBreak').click(function() {
    addBreak();
});

$('#minusBreak').click(function() {
    minusBreak();
});

//reset count to work time
$("#reset").click(function() {
    reset();
  
});

$("#start-stop").click(function() {
  $("#start-stop").toggleClass("running");
    console.log("timer toggled");
    //Toggling start and stop button
    if ($("#start-stop").hasClass("running") == true) {
     timer = setInterval(function(){ countDown()}, 1000);
      $("#start-stop").html("Stop");
    } else {
      clearInterval(timer);
      $("#start-stop").html("Start");
    };
  });

  


//get timer working while using display 
//add css to fill up 
