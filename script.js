// event Listener on the button to start the game

/*Starting the game*/

// A timer starts and is displayed on the page.
// et a variable that has the number of milliseconds
// Will need to setup a setInterval function
// If variable reaches 0, clear the timer, example is in 4.2
// Make sure the timer works for 10 seconds and doesnt go below one second
// clear the timer when it hits 0
// clear the middle section and display the first question

/* Logic of the quiz */
// Need something keeping track of score

// Need a list of multichoice questions
// list of questions inside array.
// what makes a question:
// answers
// the actual question (in text form)

//( use a object and put the questions, possible answers, and the correct answers inside)

/* Putting a question on the page */
// Take the first question from the array, this will be an object
// Grab the title of the question and put it oon the page with javascript
// Grab the answers of the question
    // Loop through the asnwers
    // Put the answers in individual
    // Have some data on the buttons indicating the value inside (hint data-answer)
    // event listener to click those answrs
        // when you click the answer, you grab the value of that button and compare it to correct answer
            // if right, you can keep score the same or increase
            // if wrong, you can lower the score
        // after comparison and score calculation.
            // old question disappears, new question appears
                // increase the counter by 1 to go to the next question
            // compare counter to the length of the array if less go to next page.
                // repeat everything wr did above
        // once the counter is equal to the length of the array, we end the game.

        // Last screen all done
            // Title
            // Your final score
            // input
            // submit
        // Once you submit the score
            // Grab the intial array from localStorage, if there is one, and convert it, otherwise use an empty array
            // take score and initial
            // You'll save that score, and the initials to localStorage

var timeCount = document.querySelector("#timeCount");
var startQuiz = document.querySelector("#startQuiz");
var welcomePage = document.querySelector("#startingPage");
var quizPage = document.querySelector("#questionPage");
var resultPage = document.querySelector("#gameOverPage")
var result = document.querySelector("wereYouRight");
var secondsLeft = 100;

var displayQuestion = document.querySelector(".question");
var displayAnswers = document.querySelector(".answers");
var displayResult = document.querySelector("#answerStatus"); 
var yourScore = document.querySelector("#yourScoreHere");
var enterIntials = document.querySelector("#enterInitials")
var submitButton = document.querySelector("#submitScore");

var page = 0;
var content = 0;
var gameScore = 0;
var getLocalScore =  JSON.parse(localStorage.getItem("highScore")) || [];

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeCount.textContent = secondsLeft + " seconds.";

    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      finishScreen(); //change when ready to game over screen
    }

  }, 1000);
}


            // Add event listener to the container then check the target of the click
            // and match with the target element of button. Everytime it matches the
            //target element it should increase the [page] index to the next Number.

            // A function that increments that changes the text content of my buttons.
            // (note) try if else statement instead of function, if button is clicked and
            // it is less than the length of my array load new answer set and next question.


function goThroughQuiz(){
    startQuiz.addEventListener("click", function(){
        welcomePage.parentNode.removeChild(welcomePage);
        quizPage.setAttribute("class", "visible w-50 mx-auto");
        setTime();
        newPage();

        
    });
    displayAnswers.addEventListener("click", nextPage);
}

function newPage(event){
    displayQuestion.children[0].textContent = quizContent[page].question
    answerBtn1 = document.createElement("Button")
    answerBtn2 = document.createElement("Button")
    answerBtn3 = document.createElement("Button")
    answerBtn4 = document.createElement("Button")
    answerBtn1.setAttribute("class", "btn btn-outline-primary btn-block mx-auto");
    answerBtn2.setAttribute("class", "btn btn-outline-primary btn-block mx-auto");
    answerBtn3.setAttribute("class", "btn btn-outline-primary btn-block mx-auto");
    answerBtn4.setAttribute("class", "btn btn-outline-primary btn-block mx-auto");
    answerBtn1.textContent = quizContent[page].answers[0]
    answerBtn2.textContent = quizContent[page].answers[1]
    answerBtn3.textContent = quizContent[page].answers[2]
    answerBtn4.textContent = quizContent[page].answers[3]
    displayAnswers.appendChild(answerBtn1);
    displayAnswers.appendChild(answerBtn2);
    displayAnswers.appendChild(answerBtn3);
    displayAnswers.appendChild(answerBtn4);

}
function finishScreen(){
    quizPage.parentNode.removeChild(quizPage);
    // quizPage.setAttribute("class", "invisible w-50 mx-auto");
    resultPage.setAttribute("class", "visible w-50 mx-auto");
    submitButton.addEventListener("click", function(event){
        event.preventDefault();
        var initials = enterIntials.value;
        getLocalScore.push({
            initials: initials, 
            score: gameScore
        })
        localStorage.setItem("highScore", JSON.stringify(getLocalScore));
        location.href = "highscores.html";
    })

}
function nextPage(event){
    if (event.target.matches("button") && page < quizContent.length -1){
        if (event.target.textContent == quizContent[page].correctAnswer){
            displayResult.textContent = "That is correct!";
        } 
        if (event.target.textContent != quizContent[page].correctAnswer ) {
            displayResult.textContent = "That is wrong!"
            secondsLeft = secondsLeft - 10;
        }
        page++;
        
        displayQuestion.children[0].textContent = quizContent[page].question;
        answerBtn1.textContent = quizContent[page].answers[0];
        answerBtn2.textContent = quizContent[page].answers[1];
        answerBtn3.textContent = quizContent[page].answers[2];
        answerBtn4.textContent = quizContent[page].answers[3];

    } else if (event.target.matches("button") && page < quizContent.length) {
        finishScreen();
        gameScore += secondsLeft;
        secondsLeft = 0;
    } 
    yourScore.textContent = gameScore;
}


var quizContent = [
    {
        question: "first question",
        answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
        correctAnswer: "answer 2"
    }, 
    {
        question: "second question",
        answers: ["answer 11", "answer 12", "answer 13", "answer 14"],
        correctAnswer: "answer 13"
    },
    {
        question: "third question",
        answers: ["answer 21", "answer 22", "answer 23", "answer 24"],
        correctAnswer: "answer 21"
    },
    {
        question: "fourth question",
        answers: ["answer 31", "answer 32", "answer 33", "answer 34"],
        correctAnswer: "answer 34"
    }
]


goThroughQuiz();
