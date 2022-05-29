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
var timer = 0;

var listEl = document.createElement("ul");

// Display questions function
function displayQuestions(questionIndex) {
    // Removes pre-existing data from page
    questionsSectionEl.innerHTML = "";
    
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
                console.log("correct");
            }
            else {
                console.log("incorrect");
            }
        });
    }
}



startButtonEl.addEventListener("click", function() {
    // START TIMER

    // Displays first question on page
    displayQuestions(0);
})