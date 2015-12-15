//set init var
var time = {
  work: 25,
  break: 5
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

function addWork() {
     time.work += 1;
    count = time.work;
    $("p.workInt").html(time.work);

    //updating count var to change with work
    $("p.counter").html(count);
  };

function minusWork() {
    //on - button click subtract 1 to Work interval
    time.work -= 1;
    count = time.work;
    //avoiding non-existant and negative intervals
    if(time.work >= 1) {
      //updating count var to change with work
      $("p.workInt").html(time.work);
      $("p.counter").html(count);
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
    $("p.counter").html(count);
    console.log("timer reset")    

  };


function checkStatus() {
  //setting work vs break sessions
  if($("#clock").hasClass("workTime") == true) {
    $("p.type").html("Work");
     $("p.counter").html(time.work);
  } else {
     $("p.type").html("Break");
      count = time.break;
  };
};


function countDown(){
    if (count >= 1) {
      count -= 1;
      $("p.counter").html(count);
    } else {
      console.log("switch")
      //play alarm
      audio.play();
       $("#clock").toggleClass("workTime");
       checkStatus();
    }
  };
  
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
    console.log("timer started");
    //Toggling start and stop button
    if ($("#start-stop").hasClass("running") == true) {
     timer = setInterval(function(){ countDown()}, 1000);
      $("#start-stop").html("Stop");
    } else {
      clearInterval(timer);
      $("#start-stop").html("Start");
    };
  });

  


//function to convert seconds into munutes and display as string
//call countdown again on switch 
