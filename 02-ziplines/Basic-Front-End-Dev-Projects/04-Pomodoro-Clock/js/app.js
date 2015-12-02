//set init var
var time = {
  work: 25,
  break: 5
};
var count = time.work;
//set inner html to respective varibles
$("p.workInt").html(time.work);
$("p.breakInt").html(time.break);
$("p.counter").html(count);
$("#start").html("Start");

$('#addWork').click(function() {
  //on + button click add 1 to Work     interval
  time.work += 1;
  count = time.work;
  $("p.workInt").html(time.work);
  //updating count var to change with work
  $("p.counter").html(count);
});

$('#minusWork').click(function() {
  //on - button click subtract 1 to Work interval
  time.work -= 1;
  count = time.work;
  //avoiding non-existant and negative intervals
  if (time.work >= 1) {
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

$("#reset").click(function() {
  count = time.work;
  console.log("timer reset")
});

function countDown() {
  console.log("countdown started");
  count -= 1;
  console.log(count);
    if(count <= 0){
    console.log("stop");
    }
};

var timer = setInterval(countDown, 1000)

$("#start").click(function() {
  console.log("timer started");
  timer();
});

//click to start and stop clock use inner html and active class to change word from start to stop
//set time interval
//add active class to determine when clock should show work or break time
//add sound when swtiches from work to break and vice versa
//reset clock when work timer changed