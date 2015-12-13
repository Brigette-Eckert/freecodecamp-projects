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


function checkMode() {
  //setting work vs break sessions
  console.log("checking class")
  if($("#clock").hasClass("workTime") == true) {
    $("p.type").html("Work");
     $("p.counter").html(time.work);
  } else {
     $("p.type").html("Break");
      count = time.break;
  };
};

function countDown () {
  console.log(count)
   //counting down
    while(count >= 1) {
      count -= 1;
      $("p.counter").html(count);
    } 
    // while(count <= 0){
    //   console.log("switch")
    //   //play alarm
    //   audio.play();
    //    $("#clock").toggleClass("workTime");
    // }
  };
 
$('#addWork').click(function() {
  //on + button click add 1 to Work interval
  time.work += 1;
  count = time.work;
  $("p.workInt").html(time.work);
  //

  //updating count var to change with work
  $("p.counter").html(count);
});

$('#minusWork').click(function() {
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
});

$('#addBreak').click(function() {
  //on + button click add 1 to Break     interval
  time.break += 1;
  $("p.breakInt").html(time.break);
});

$('#minusBreak').click(function() {
  //on - button click subtract one from break interval
  time.break -= 1;
  //avoiding non-existant and negative intervals
  if (time.break >= 1) {
    $("p.breakInt").html(time.break);
  } else {
    time.break = 1;
  }
});

//reset count to work time
$("#reset").click(function() {
  if($("#clock").hasClass("workTime") == false){
    $("#clock").addClass("workTime");
  }
  count = time.work;
  console.log("timer reset")
});

$("#start-stop").click(function() {
  $("#start-stop").toggleClass("running");
    console.log("timer started");
    //Toggling start and stop button
    if ($("#start-stop").hasClass("running") == true) {
      checkMode();
     timer = setInterval(function(){ 
       countDown();
     }, 1000);
      $("#start-stop").html("Stop");
    } else {
      $("#start-stop").html("Start");
    };
  });

  


//pause clock
//function to convert seconds into munutes and display as string
//call countdown again on switch (vs on start- event handler for class switch?)