var questionsArray = [
    {
        title: "Commonly used data types DO Not Include:",
        choices: ["strings","booleans","alerts","numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed with ______.",
        choices: ["quotes","curly brackets","parenthesis","square brackets"],
        answer: "parenthesis"
    },
    {
        title: "Arrays in JavaScript can be used to store _______.",
        choices: ["numbers and strings","other arrays","booleans","all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ______ when being assigned to variables",
        choices: ["commas","curly brackets","quotes","parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool used during development and debugginf for printing content to the debugger is:",
        choices: ["JavaScript","terminal/bash","for loops","console.log"],
        answer: "console.log"
    }
];

var questionsSectionEl = document.querySelector("#questionsSection");
var wrapperEl = document.querySelector("#wrapper");
var startButtonEl = document.querySelector("#startBtn");
var listEl = document.createElement("ul");
var timeEl = document.querySelector("#currentTime");
var timer = 60;

// Clears question section and list element
function clearContent() {
    questionsSectionEl.innerHTML = "";
    listEl.innerHTML = "";
}

// Timer function
function startTimer() {
    setInterval(function() {
        timer = timer - 1;
        // Displays time for user
        timeEl.textContent = "Time: " + timer;
        
        // Checks if user has run out of time
        if (timer <= 0) {
            endGame()
            // Keeps time from counting down to the negatives
            timer = 1;
        }
    }, 1000);
}

// Display questions function
function displayQuestions(questionIndex) {
    clearContent();

    // Display question
    questionsSectionEl.textContent = questionsArray[questionIndex].title;

    // Displays list of choices
    questionsSectionEl.appendChild(listEl);
    
    // Loop for listing off each choice
    for (var i = 0; i < 4; i++) {
        // Create list item element
        var listItemEl = document.createElement("li");
        // Selects choice, sets text content of list item element
        listItemEl.textContent = questionsArray[questionIndex].choices[i];
        // Adds list item to list of questions
        listEl.appendChild(listItemEl);
        // Make list items clickable and see if the item clicked is the right answer
        listItemEl.addEventListener("click", function(event) {
            var option = event.target;

            if (option.textContent === questionsArray[questionIndex].answer) {
                // Runs the function all over again, except this time displays the next question
                displayQuestions(questionIndex + 1);
            }
            else {
                // Subtract time from the clock
                timer = timer - 15;
                // Runs the function all over again, except this time displays the next question
                displayQuestions(questionIndex + 1);
            }
        });
    }
}

// End game function
function endGame() {
    clearContent();

    var endGameH1 = document.createElement("h1");
    endGameH1.textContent = "GAME OVER";
    questionsSectionEl.appendChild(endGameH1);
}


// When "Start Quiz" button is clicked...
startButtonEl.addEventListener("click", function() {
    // Start timer
    startTimer();

    // Displays first question on page
    displayQuestions(0);
})