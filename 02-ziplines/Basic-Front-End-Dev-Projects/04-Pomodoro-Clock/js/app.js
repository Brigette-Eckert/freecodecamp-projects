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

function timeDisplay(timeInput) {
  console.log("the count is" + " " + timeInput);
  var min;
  var sec;
   //set dispaly to xx:xx vs one string  
  if(timeInput >= 60){
     min = Math.floor(timeInput/60);
     sec = timeInput%60;
     //setting dispaly so 0s are in correct place when needed
      if(sec == 0) {
        count  = min.toPrecision(2) + ":" + sec + "0";
      } else if(min < 10) {
          count  = "0" + min + ":" + sec;
      } else if(min == 0) {
        //fix seconds display with other else if &&
          count  = "00" + ":" + sec;
      } else {
        count  = min + ":" + sec;
      }
  } else {
    min = 0;
    sec = timeInput;
    count  = "0" + min + ":" + sec.toPrecision(2);
   }
   $("p.counter").html(count);
};

function addWork() {
    time.work += 1;
    count = time.work;
    timeDisplay(count);
    $("p.workInt").html(count);
    //updating count var to change with work
    $("p.counter").html(count);
  };

function minusWork() {
    //on - button click subtract 1 to Work interval
    time.work -= 1;
    count = time.work;
    //not sure why this is coming up as undefine
    timeDisplay(count);
     $("p.workInt").html(count);
    //avoiding non-existant and negative intervals
    if(time.work >= 1) {
      //updating count var to change with work
      $("p.workInt").html(count);
      timeDisplay();
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
  

timeDisplay(count); 
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
