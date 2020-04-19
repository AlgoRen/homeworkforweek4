// has to teach out to localStorage using the same key that you put the information
// convert if from string to array
// make elements, put the info in it,

var listOfScores = document.querySelector(".highScoresList")
var clearScores = document.querySelector("#clearScoresBtn")
var getLocalScore =  JSON.parse(localStorage.getItem("highScore")) || [];

for (var i = 0; i < getLocalScore.length; i++){
    var list = document.createElement("li");
    list.setAttribute("class", "list-group-item")
    list.textContent = "Good job, " + getLocalScore[i].initials + ". " + "Your score is "
    + getLocalScore[i].score + ".";
    listOfScores.appendChild(list);
}

clearScores.addEventListener("click", function(){
    localStorage.setItem("highScore", JSON.stringify(""));
    listOfScores.textContent = "";
})

