var timerElement = document.querySelector(".timerCount");
var startElement = document.querySelector(".startQuiz");
var displayQuiz = document.querySelector(".displayQuiz");

// question format as follows: ["questiontext", "answerone", "answertwo", "answerthree", 'answerfour','correct answer']
var questionAnswerArray = [
  ["Commonly used types of data DO NOT include:", "1. strings", "2. booleans", "3. alerts", '4. numbers', '3. alerts'],
  ["The condition in an if / else statement is enclosed within _____.", "1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets","2. curly brackets"],
  ["Arrays in JavaScript can be used to store _____.", "1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above", "4. all of the above"],
  ["A very useful tool used during development and debugging for printing content to the debugger is:", "1. JavaScript", "2. terminal / bash", "3. for loops", "4. console.log", "4. console.log"]
]

questionIndex = 0;

timerCount = 75;

answerWrong = false;

highscores = [];

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
  var displayAnswers = document.createElement("ul");
  // var stupidLiElement = document.createElement("li");

  displayQuiz.appendChild(displayAnswers);
  // pass some variable into the first dimension of the array that iterates???
  // For loop iterates through the array of arrays and displays each button
  for (var i = 1; i < questionAnswerArray[questionIndex].length - 1; i++) {
    var buttonTag = document.createElement("button");
    var listButton = document.createElement('li').appendChild(buttonTag);
    buttonTag.addEventListener("click", checkAnswer);
    displayAnswers.appendChild(listButton);
    buttonTag.textContent = questionAnswerArray[questionIndex][i];
  }
}

function checkAnswer(event) {
  console.log(event.target.textContent);
  console.log(questionAnswerArray[questionIndex][5]);
  if (questionIndex < questionAnswerArray.length - 1) {
    if (event.target.textContent == questionAnswerArray[questionIndex][5]) {
      questionIndex++;
      renderQuestion();
    } else {
      timerCount = timerCount-10;
      questionIndex++;
      renderQuestion();
    }
  } else {
    highscorePage();
  }
}
  // check the answer selected vs the correct answer and add counter to 1st dimension of the array

  // if statement that says if questionIndex = questionAnswerArray.length - 1 then run highscore page function

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

function highscorePage() {
  var score = localStorage.setItem("score", score);
  score += highscores;
  console.log(highscores);

  // displayQuiz becomes highscore page
  // stores highscore which is just timer variable. have to store to local storage
  // text/input box for initials
  // sort highscore array greatest to least
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

