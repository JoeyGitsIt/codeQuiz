var timerElement = document.querySelector(".timerCount");
var startElement = document.querySelector(".startQuiz");
var displayQuiz = document.querySelector(".displayQuiz");

var questionAnswerArray = [
  ["questiontext", "answerone", "answertwo", "answerthree", 'answerfour', 'correct answer'],
  ["questiontext", "answerone", "answertwo", "answerthree", 'answerfour'],
  ["tears", "test1", "test2"]
]

questionIndex = 0;

timerCount = 75;

answerWrong = false;

// score in the game is just time left... weird
score = 0;

startQuiz();

function startQuiz () {
  startElement.addEventListener("click",function() {
    renderQuestion();
    timerCountdown();
  })
}

function renderQuestion () {
  // add some sort of styling to make it look like h1
  displayQuiz.textContent = questionAnswerArray[questionIndex][0];
  // pass some variable into the first dimension of the array that iterates???
  // For loop iterates through the array of arrays and displays each button
  for (var i = 1; i < questionAnswerArray[questionIndex].length - 1; i++) {
    var buttonTag = document.createElement("button");
    document.body.appendChild(buttonTag);
    buttonTag.textContent = questionAnswerArray[0][i];
  }
}

function checkAnswer() {
  questionIndex++;

  // check the answer selected vs the correct answer and add counter to 1st dimension of the array

  // if statement that says if questionIndex = questionAnswerArray.length - 1 then run highscore page function
}

function scoreCount() {

}

function timerCountdown() {
  timer = setInterval(function() {
    if (timerCount > 0) {
      timerCount--;
      timerElement.textContent = timerCount;
      // print high score/time left
    }
    else {
      // run gameover/display gameover
      return;
    }
  }, 1000);
}



/*
Variables for:
  questions
  answer choices
  timer
  wrong/right confirmation
  highscore value
  highscore submission
*/

/*
Functions for:
  init - loads the stuff
  scoreCount - counts the score while taking quiz, might get wrapped into results function
  display question and answer choices - <-- look at that
    result to question - takes the answer and determines if it's right or wrong, if wrong deduct time
  timer - make do count down and make display right/wrong
  completion of quiz - if timer counts down to 0 or all questions answered end quiz
  ending page score thingy idk - make thing that stores scores to localStorage and options to clear out scores or submit them
*/

