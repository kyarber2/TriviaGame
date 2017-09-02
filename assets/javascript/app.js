var totalCorrect = 0;
var totalIncorrect = 0;
var selectionsArray = []
var questionsArray = [
{
  "questionNumber" : "q0",
  "question": "Who starred in both Jurassic Park and Independence Day?",
  "choiceA": "Jeff Goldblum",
  "choiceB": "Laura Dern",
  "choiceC": "Will Smith" ,
  "choiceD":"Bill Pullman" ,
  "correctAnswer" : "Jeff Goldblum"
}, 
{
  "questionNumber" : "q1",
  "question": "Which movie features Arnold Schwarzenegger chasing an alien through the Colombian Rainforest?",
  "choiceA": "True Lies",
  "choiceB": "Alien",
  "choiceC": "Predator" ,
  "choiceD":"Terminator" ,
  "correctAnswer":"Predator"
},
{
  "questionNumber" : "q2",
  "question": "Which of the following does Neo learn to do in The Matrix?",
  "choiceA": "Fly an Apache Helicopter",
  "choiceB": "Read people's minds",
  "choiceC": "Kung Fu" ,
  "choiceD":"Tae Kwon Do", 
  "correctAnswer":"Kung Fu"
},
{
  "questionNumber" : "q3",
 "question": "Who plays Ripley in Alien?",
  "choiceA": "Tom Skerritt",
  "choiceB": "Sigourney Weaver",
  "choiceC": "Susan Sarandon" ,
  "choiceD": "Ian Holm" ,
  "correctAnswer" : "Sigourney Weaver"
},
{
  "questionNumber" : "q4",
  "question": "What is Indiana Jones's real first name?",
 "choiceA": "Harry",
 "choiceB": "Charles",
  "choiceC": "Robert" ,
  "choiceD": "Henry" ,
  "correctAnswer" : "Henry"
}
];
for(i=0; i<5; i++){
$("#q" + [i]).html(questionsArray[i].question);
$("#choiceA" + [i]).html(questionsArray[i].choiceA);
$("#choiceB" + [i]).html(questionsArray[i].choiceB);
$("#choiceC" + [i]).html(questionsArray[i].choiceC);
$("#choiceD" + [i]).html(questionsArray[i].choiceD);
$("#inputA" + [i]).val(questionsArray[i].choiceA);
$("#inputB" + [i]).val(questionsArray[i].choiceB);
$("#inputC" + [i]).val(questionsArray[i].choiceC);
$("#inputD" + [i]).val(questionsArray[i].choiceD);
}

$("#myForm").submit(function(event){
	event.preventDefault();
	$("#myForm input:checked").each(function(index, element){

    //selectionsArray.push($("#myForm input:checked").val());
    selectionsArray.push($(this).val());
  });
  
	//console.log(selection);
  compare(selectionsArray);
})

function compare(selectionsArray){
  for(i=0; i<5; i++){
    if (selectionsArray[i] === questionsArray[i].correctAnswer){
      totalCorrect++;
      alert("correct");
    }
    else{totalIncorrect++
      alert("incorrect");
  }
  }
}

//if ($('input[name="radios"]:checked').val() == currentAnswer){
//userScore.correct++;
//} else{
//    userScore.incorrect++;
//}
//console.log(userScore);
//[q1, q2, q3, q4, q5]


// This code will run as soon as the page loads
window.onload = function() {
  stopwatch.start();
  $("#stop").on("click", stopwatch.stop);
  $("#reset").on("click", stopwatch.reset);
  $("#start").on("click", stopwatch.start);
};
//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
//prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our stopwatch object
var stopwatch = {
  time: 30,
  reset: function() {
    stopwatch.time = 0;
    // DONE: Change the "display" div to "00:00."
    $("#time-remaining").html("00:30");
  },
  start: function() {
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
    }
  },
  stop: function() {
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },
  count: function() {
    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time--;
    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);
    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#time-remaining").html(converted);
  },
  timeConverter: function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }
};

//var timeLeft = setInterval(myTimer, 30000);
/*var q1 = {
"question": "Who starred in both Jurassic Park and Independence Day?",
"choiceA": "Jeff Goldblum",
"choiceB": "Laura Dern",
"choiceC": "Will Smith" ,
"choiceD":"Bill Pullman" ,
"correctAnswer" : "Jeff Goldblum"
} 
var q2 = {
"question": "Which movie features Arnold Schwarzenegger chasing an alien through the Colombian Rainforest?",
"choiceA": "True Lies",
"choiceB": "Alien",
"choiceC": "Predator" ,
"choiceD":"Terminator" ,
"correctAnswer":"Predator"
}

var q3 = {
"question": "Which of the following does Neo learn to do in The Matrix?",
"choiceA": "Fly an Apache Helicopter",
"choiceB": "Read people's minds",
"choiceC": "Kung Fu" ,
"choiceD":"Tae Kwon Do", 
"correctAnswer":"Kung Fu"
}
var q4 =   {
"question": "Who plays Ripley in Alien?",
"choiceA": "Tom Skerritt",
"choiceB": "Sigourney Weaver",
"choiceC": "Susan Sarandon" ,
"choiceD": "Ian Holm" ,
"correctAnswer" : "Sigourney Weaver"
}
var q5 = {
"question": "What is Indiana Jones's real first name?",
"choiceA": "Harry",
"choiceB": "Charles",
"choiceC": "Robert" ,
"choiceD": "Henry" ,
"correctAnswer" : "Henry"
}*/
/*
for(i=0; i<5; i++){
$("#q[i]").html(q[i].question);
$("#choiceA[i]").html(q[i].choiceA);
$("#choiceB[i]").html(q[i].choiceB);
$("#choiceC[i]").html(q[i].choiceC);
$("#choiceD[i]").html(q[i].choiceD);
}
*/
/*$("#q1").html(q1.question);
$("#choiceA1").html(q1.choiceA);
$("#choiceB1").html(q1.choiceB);
$("#choiceC1").html(q1.choiceC);
$("#choiceD1").html(q1.choiceD);

$("#q2").html(q2.question);
$("#choiceA2").html(q2.choiceA);
$("#choiceB2").html(q2.choiceB);
$("#choiceC2").html(q2.choiceC);
$("#choiceD2").html(q2.choiceD);

$("#q3").html(q3.question);
$("#choiceA3").html(q3.choiceA);
$("#choiceB3").html(q3.choiceB);
$("#choiceC3").html(q3.choiceC);
$("#choiceD3").html(q3.choiceD);

$("#q4").html(q4.question);
$("#choiceA4").html(q4.choiceA);
$("#choiceB4").html(q4.choiceB);
$("#choiceC4").html(q4.choiceC);
$("#choiceD4").html(q4.choiceD);

$("#q5").html(q5.question);
$("#choiceA5").html(q5.choiceA);
$("#choiceB5").html(q5.choiceB);
$("#choiceC5").html(q5.choiceC);
$("#choiceD5").html(q5.choiceD);*/


