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
  "question": "Which movie features Arnold Schwarzenegger chasing an alien through the jungle?",
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

$("#correct-total").html(0);
$("#incorrect-total").html(0);

$("#myForm").submit(function(event){
	event.preventDefault();
	$("#myForm input:checked").each(function(index, element){
    selectionsArray.push($(this).val());
  });
  compare(selectionsArray);
  alert("Game Over! Your total score is " + totalCorrect + " out of 5")
})

function compare(selectionsArray){
  for(i=0; i<5; i++){
    if (selectionsArray[i] === questionsArray[i].correctAnswer){
      totalCorrect++;
      $("#correct-total").html(totalCorrect);
    }
    else{totalIncorrect++
      $("#incorrect-total").html(totalIncorrect);
  }
  }
}
setTimeout(function(){ alert("Time's up!"); }, 60000);

window.onload = function() {
  stopwatch.start();
  $("#stop").on("click", stopwatch.stop);
  $("#reset").on("click", stopwatch.reset);
  $("#start").on("click", stopwatch.start);
};

var intervalId;
var clockRunning = false;
var stopwatch = {
  time: 60,
  reset: function() {
    stopwatch.time = 0;
    $("#time-remaining").html("60");
  },
  start: function() {
    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
    }
  },
  stop: function() {
    clearInterval(intervalId);
    clockRunning = false;
  },
  count: function() {
    stopwatch.time--;
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);
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




