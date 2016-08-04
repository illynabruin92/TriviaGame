var audio = new Audio('assets/triviaimages/johnwilliams.mp3');

setTimeout(oneSecond, 1000 * 0.5);
setTimeout(tenSeconds, 1000 * 10);
setTimeout(twentySeconds, 1000 * 20);
setTimeout(thirtySeconds, 1000 * 30);
setTimeout(fortySeconds, 1000 * 40);
setTimeout(fiftySeconds, 1000 * 50);
setTimeout(timeUp, 1000 * 60);

function oneSecond() {
  audio.play();
}

function tenSeconds() {
  $('#time-left').html('<h2>50 Seconds Remaining</h2>');
}

function twentySeconds() {
  $('#time-left').html('<h2>40 Seconds Remaining</h2>');
}

function thirtySeconds() {
  $('#time-left').html('<h2>30 Seconds Remaining</h2>');
}

function fortySeconds() {
  $('#time-left').html('<h2>20 Seconds Remaining</h2>');
}

function fiftySeconds() {
  $('#time-left').html('<h2>10 Seconds Remaining</h2>');
}

function timeUp(){
  //audio.play();
  console.log('done');
  $('#time-left').html('<h2>Time\'s Up!</h2>');
}

var correct = 0
var incorrect = 0

//Total number of questions:
var totalquestions = 10

//Answers
var correctanswers = ['b','b','b','d','c','c','b','d','c','a']

function submitgame(){
      $("#btn1").click(function(){
          $('#correct').html('<span> Correct: ' + correct + '</span>');
          $('#incorrect').html('<span> Incorrect: ' + incorrect + '</span>');
      });
}

  function check1(){
  if (correctanswers[0] = 'b'){
    correct++;
    $('#correct').html('<span> Correct: ' + correct + '</span>');
  }
  else {
    incorrect++;
    $('#incorrect').html('<span> Incorrect: ' + incorrect + '</span>');
  }
}

function check2(){
  if (correctanswers[1] = 'b'){
    correct++;
    $('#correct').html('<span> Correct: ' + correct + '</span>');
  }
  else {
    incorrect++;
    $('#incorrect').html('<span> Incorrect: ' + incorrect + '</span>');
  }
}


function check3(){
  if (correctanswers[2] = 'b'){
    correct++;
    $('#correct').html('<span> Correct: ' + correct + '</span>');
  }
  else {
    incorrect++;
    $('#incorrect').html('<span> Incorrect: ' + incorrect + '</span>');
  }
}

function check4(){
  if (correctanswers[3] = 'd'){
    correct++;
    $('#correct').html('<span> Correct: ' + correct + '</span>');
  }
  else {
    incorrect++;
    $('#incorrect').html('<span> Incorrect: ' + incorrect + '</span>');
  }
}

function check5(){
  if (correctanswers[4] = 'c'){
    correct++;
    $('#correct').html('<span> Correct: ' + correct + '</span>');
  }
  else {
    incorrect++;
    $('#incorrect').html('<span> Incorrect: ' + incorrect + '</span>');
  }
}

function check6(){
  if (correctanswers[5] = 'c'){
    correct++;
    $('#correct').html('<span> Correct: ' + correct + '</span>');
  }
  else {
    incorrect++;
    $('#incorrect').html('<span> Incorrect: ' + incorrect + '</span>');
  }
}

function check7(){
  if (correctanswers[6] = 'b'){
    correct++;
    $('#correct').html('<span> Correct: ' + correct + '</span>');
  }
  else {
    incorrect++;
    $('#incorrect').html('<span> Incorrect: ' + incorrect + '</span>');
  }
}

function check8(){
  if (correctanswers[7] = 'd'){
    correct++;
    $('#correct').html('<span> Correct: ' + correct + '</span>');
  }
  else {
    incorrect++;
    $('#incorrect').html('<span> Incorrect: ' + incorrect + '</span>');
  }
}

function check9(){
  if (correctanswers[8] = 'c'){
    correct++;
    $('#correct').html('<span> Correct: ' + correct + '</span>');
  }
  else {
    incorrect++;
    $('#incorrect').html('<span> Incorrect: ' + incorrect + '</span>');
  }
}

function check10(){
  if (correctanswers[9] = 'a'){
    correct++;
    $('#correct').html('<span> Correct: ' + correct + '</span>');
  }
  else {
    incorrect++;
    $('#incorrect').html('<span> Incorrect: ' + incorrect + '</span>');
  }
}
