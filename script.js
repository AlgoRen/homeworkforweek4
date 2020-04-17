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
var secondsLeft = 100;

var displayQuestion = document.querySelector(".question");
var displayAnswers = document.querySelector(".answers")
var page = 0;
var content = 0;


function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeCount.textContent = secondsLeft + " seconds.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage(); //change when ready to game over screen
    }

  }, 1000);
}



function createAnswerButtons(){
    for (var i = 0; i < 4; i++){
        answerBtn = document.createElement("Button")
        answerBtn.setAttribute("class", "btn btn-outline-primary btn-block mx-auto");
        answerBtn.textContent = quizContent[page].answers[i]
        displayAnswers.appendChild(answerBtn);
    }
}

function goThroughQuiz(){
    startQuiz.addEventListener("click", function(){
        welcomePage.parentNode.removeChild(welcomePage);
        quizPage.setAttribute("class", "visible w-50 mx-auto");
        displayQuestion.children[0].textContent = quizContent[page].question
        setTime();
        createAnswerButtons();

        console.log(quizContent[page].answers[0]);
        console.log(quizContent[page].answers[1]);
        console.log("----------------------------");
        console.log(quizContent[page + 1].question);
        console.log(quizContent[page + 1].answers[0]);
    })
    listenForAnswerChoice();
}

function listenForAnswerChoice(){
    moveToNext();
    for (var k = 0; k < 4; k++){
        displayAnswers.children[k].addEventListener("click", newPage);
    }
    alert(page);
}

 function moveToNext(){
     for (var m = 0; m < quizContent.length; m++){
         page++;
         break;
     }
     return page;
 }

function newPage(){
    console.log("Inside new page function");
    displayAnswers.parentNode.removeChild(displayAnswers);
    displayQuestion.children[0].textContent = quizContent[page].question;
    quizPage.appendChild(displayAnswers);
    alert(page)
    createAnswerButtons();
}


var quizContent = [
    {
        question: "first question",
        answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
        correctAnswer: "this answer"
    }, 
    {
        question: "second question",
        answers: ["answer 13", "answer 12", "answer 13", "answer 14"],
        correctAnswer: "this answer"
    },
    {
        question: "third question",
        answers: ["answer 21", "answer 22", "answer 23", "answer 24"],
        correctAnswer: "this answer"
    },
    {
        question: "fourth question",
        answers: ["answer 31", "answer 32", "answer 33", "answer 34"],
        correctAnswer: "this answer"
    }
]


goThroughQuiz();