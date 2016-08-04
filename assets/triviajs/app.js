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

function check(){
var incorrect=null
for (q = 1; q <= totalquestions; q++){
	var thequestion = eval("document.trivia.question"+q)
	for (b = 0; b < thequestion.length; b++){
		if (thequestion[b].checked == true)
		actualchoices[q]=thequestion[b].value
		}

	if (actualchoices[q] != correctchoices[q]){ //for wrong answers
		if (incorrect == null)
		incorrect = q
		else
		incorrect += "/" + q
		}
	}


  function showsolution(){
  var win2=window.open("","win2","width=200,height=350, scrollbars")
  win2.focus()
  win2.document.open()
  win2.document.write('<title>Solution</title>')
  win2.document.write('<body bgcolor="#FFFFFF">')
  win2.document.write('<center><h3>Solution to Quiz</h3></center>')
  win2.document.write('<center><font face="Arial">')
  for (i=1;i<=totalquestions;i++){
  for (temp=0;temp<incorrect.length;temp++){
  if (i==incorrect[temp])
  wrong=1
  }
  if (wrong==1){
  win2.document.write("Question "+i+"="+correctchoices[i].fontcolor("red")+"<br>")
  wrong=0
  }
  else
  win2.document.write("Question "+i+"="+correctchoices[i]+"<br>")
  }
  win2.document.write('</center></font>')
  win2.document.write("<h5>Note: The solutions in red are the ones to the questions you had incorrectly answered.</h5><p align='center'><small><a href='http://www.javascriptkit.com' target='_new'>JavaScript Kit quiz script</a></small>")
  win2.document.close()
  }

  var audio = new Audio('https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90');

setTimeout(fiveSeconds, 1000 * 5);
setTimeout(tenSeconds, 1000 * 10);
setTimeout(timeUp, 1000 * 15);

function fiveSeconds() {
    $('#time-left').html('<h2>About 10 Seconds Left!</h2>');
    alert('10 seconds left');
}

function tenSeconds() {
    $('#time-left').html('<h2>About 5 Seconds Left!</h2>');
    alert('5 seconds left');
}

function timeUp(){
    // audio.play();
    console.log('done');
    $('#time-left').html('<h2>Time\'s Up!</h2>');
    alert('time is up');
}
