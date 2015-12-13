//set init var
var time = {
  work: 25,
  break: 5
};
var count = time.work;
  //storing function in var to be able to stop timer
var timer ;
//set inner html to respective varibles
$("p.workInt").html(time.work);
$("p.breakInt").html(time.break);
$("p.type").html("Work");
$("#start-stop").html("Start")
$("p.counter").html(count);

function countDown() {
  //setting work vs break sessions
  if($("#clock").hasClass("workTime") == true) {
    $("p.type").html("Work");
     $("p.counter").html(time.work);
  } else {
     $("p.type").html("Break");
      count = time.break;
  };
  //counting down
    if (count >= 1) {
      count -= 1;
      $("p.counter").html(count);
    } else {
      console.log("switch")
      //play alarm
       $("#clock").toggleClass("workTime");
    }
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
  console.log(time.break);
});

$('#minusBreak').click(function() {
  //on - button click subtract one from break interval
  time.break -= 1;
  //avoiding non-existant and negative intervals
  if (time.break >= 1) {
    $("p.breakInt").html(time.break);
    console.log(time.break);
  } else {
    time.break = 1;
  }
});

//reset count to work time
$("#reset").click(function() {
  count = time.work;
  console.log("timer reset")
});

$("#start-stop").click(function() {
  $("#start-stop").toggleClass("running");
    console.log("timer started");
    //Toggling start and stop button
    if ($("#start-stop").hasClass("running") == true) {
     timer = setInterval(function(){ countDown()}, 1000);
      $("#start-stop").html("Stop");
    } else {
      $("#start-stop").html("Start");
    };
  });

  


//pause clock
//add sound when swtiches from work to break and vice versa
//function to convert seconds into munutes and display as string