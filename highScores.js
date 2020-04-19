// has to teach out to localStorage using the same key that you put the information
// convert if from string to array
// make elements, put the info in it,

var listOfScores = document.querySelector(".highScoresList")
var getLocalScore =  JSON.parse(localStorage.getItem("highScore")) || [];

for (var i = 0; i < getLocalScore.length; i++){
    var list = document.createElement("li");
    list.textContent = "Good job, " + getLocalScore[i].initials + "." + "Your score is "
    + getLocalScore[i].score + ".";
    listOfScores.appendChild(list);
}

