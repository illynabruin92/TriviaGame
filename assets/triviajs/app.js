var audio = new Audio('assets/triviaimages/johnwilliams.mp3');

setTimeout(oneSecond, 1000 * 1);
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
var unanswered = 0

//Total number of questions:
var totalquestions = 10

//Answers
var correctanswers = new Array()
correctanswers[1] = 'b'
correctanswers[2] = 'b'
correctanswers[3] = 'b'
correctanswers[4] = 'd'
correctanswers[5] = 'c'
correctanswers[6] = 'c'
correctanswers[7] = 'b'
correctanswers[8] = 'd'
correctanswers[9] = 'c'
correctanswers[10] = 'a'

function checkanswer(){
      $("#btn1").click(function(){
          $('<form>').remove();
          $('p').prepend("All Done!");
          $('p').append("Correct Answers: ");
          $('p').append("Incorrect Answers: ");
          $('p').append("Unanswered: ");
      });
}

  function check(){
    var incorrect = null
    for (q = 1; q <= totalquestions; q++){
	     var thequestion = eval("document.trivia.question"+q)

	    for (b = 0; b < thequestion.length; b++){
		      if (thequestion[b].checked == true)
		      actualchoices[q] = thequestion[b].value
		}

	   if (actualchoices[q] != correctchoices[q]){ //for wrong answers
		     if (incorrect == null)
		      incorrect = q
		  else
		    incorrect += "/" + q
		}
	}
}
