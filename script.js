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

