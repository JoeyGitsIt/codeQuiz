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

var questionIndex = 0;
var finished = false;
var timerCount = 75;

// displayTheQuiz();


// function displayTheQuiz() {
//   var headerEl = document.createElement("h1");
//   var pTagEl = document.createElement("p");
//   var buttonEl = document.createElement("button");

//   displayQuiz.appendChild(headerEl);
//   displayQuiz.appendChild(pTagEl);
//   displayQuiz.appendChild(buttonEl);
//   buttonEl.className = ".startQuiz";

//   headerEl.textContent = "Coding Quiz Challenge";
//   pTagEl.textContent = "This is the quiz";
//   buttonEl.textContent = "This is a button";
//   startElement = document.querySelector(".startQuiz");
//   startQuiz();
// }


startQuiz();



// Sets an onclick that displays the first question and starts the timer when the button is clicked
function startQuiz () {
  startElement.addEventListener("click",function() {
    renderQuestion();
    timerCountdown();
  })
}

// renders questions
function renderQuestion () {
  // add some sort of styling to make it look like h1
  displayQuiz.textContent = questionAnswerArray[questionIndex][0];
  var displayAnswers = document.createElement("ul");

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

// checks answer and adjusts score, displays the next questions, or ends the quiz based on behavior
function checkAnswer(event) {
  console.log(event.target.textContent);
  console.log(questionAnswerArray[questionIndex][5]);
  if (questionIndex < questionAnswerArray.length - 1) {
    if (event.target.textContent == questionAnswerArray[questionIndex][5]) {
      // display correct
      questionIndex++;
      renderQuestion();
    } else {
      // display wrong
      timerCount -= 10;
      questionIndex++;
      renderQuestion();
    }
  } else {
    highscore();
          // run the scoreEntryPage function here
  }
}

// countsdown timer, if 0 seconds, then displays Game Over
function timerCountdown() {
  timer = setInterval(function() {
    if (timerCount > 0 && !finished) {
      timerCount--;
      timerElement.textContent = timerCount;
    } 
    else if (timerCount <= 0) {
      var gameOver = displayQuiz.textContent = "Game Over";
      gameOver;
      timerCount = 0;
      // might need to create element write over other element and make pretty, SUS that it can have 2 equals
      timerElement.textContent = timerCount;
      return;
    } 
    else {
      timerElement.textContent = timerCount;
      clearInterval(timer);
    }
  }, 1000);
}

function scoreEntryPage() {
  // enter your initials, then clicking submit takes you to the highscore page
  // has a header that says "All Done!"
  // displays your final score
  // input box that asks for initials with a submit button
}

function highscore() {
  finished = true;
  console.log(timerCount);

  var highscores = JSON.parse(localStorage.getItem("scores"));

  if (highscores == null) {
    highscores = {};
  }

  highscores.push(timerCount);

  localStorage.setItem("scores", JSON.stringify(highscores));

  // have text box for initials that saves high score
  // takes me to highscore page where I can go back to Start quiz or clear highscores

  // displayQuiz becomes highscore page
  // stores highscore which is just timer variable. have to store to local storage
  // text/input box for initials
  // sort highscore array greatest to least
}

function highscorePage() {
  // displays the array in local storage that contains the initials and score
  // has a go back button that takes you to the first page
  // has a clear entries button that clears local storage
}