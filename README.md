This skate quiz starts with loading up a welcome screen where a user can choose to start quiz or view highscores. The goThroughQuiz function is called. On click of start quiz button an event listener in a the goThroughQuiz function is called and removes welcome page through the DOM. Quiz page is brought into view by selecting the attribute class and changing it from invisible to visible. The setTime function is called which starts a timer.
A function called newPage is called. The newPage function is responsible for setting up the quiz page by creating elements, setting attributes, creating the text content, displaying the first set of question and answers, and appending buttons to the page.

After the quiz page is set up an event listener is set to the container of the answer buttons and makes sure that the target element clicked is a button. Once that is found to be true it runs the nextPage function. The nextPage runs an if else condition to check to see if the selected button that corresponds with the correct answer found in the object of the corresponding array page of quizContent. I would finish this out in more detail but I have to submit my work now... to be continued...














# 04 Web APIs: Code Quiz

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

The following animation demonstrates the application functionality:

![code quiz](./Assets/04-web-apis-homework-demo.gif)

### Review

You are required to submit the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
