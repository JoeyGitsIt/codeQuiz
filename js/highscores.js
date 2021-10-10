var clearButton = document.querySelector(".clearEntries");
var ulElement = document.querySelector("ul");
var printScores = JSON.parse(localStorage.getItem("scores"));
var listButton = document.createElement('li');

function highscorePage() {
  console.log(printScores);

  for (var i = 0; i < printScores.length; i++) {
    var listButton = document.createElement('li');
    ulElement.appendChild(listButton);
    listButton.textContent = printScores[i][0] + " - " + printScores[i][1];
  }
}

highscorePage();

function clearEntries() {
  window.localStorage.removeItem("scores");
  window.location.href = "highscores.html";
}

clearButton.addEventListener("click", function() {
  clearEntries();
});