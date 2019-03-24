// *** GLOBAL VARIABLES
// --------------------------------------
// Object containing questions, answers and correct answer
var questions = [{
    question: "Is fried chicken delicious?",
    answers: ["True", "False"],
    correctAnswer: "True"
}, {
    question: "Are waffles amazing?",
    answers: ["True", "False"],
    correctAnswer: "True"
}, {
    question: "Do fried chicken and waffles go well together?",
    answers: ["True", "False"],
    correctAnswer: "True"
}, {
    question: "Is Cami hungry right now?",
    answers: ["Yes", "No", "Always"],
    correctAnswer: "Always"
}, {
    question: "What delicious sweet liquid is poured over waffles?",
    answers: ["Milk", "Gravy", "Syrup", "Marinara"],
    correctAnswer: "Syrup"
}, {
    question: "Fried chicken makes this sound when you bite it:",
    answers: ["Squish", "Crunch", "Bang", "Woof"],
    correctAnswer: "Crunch"
}, {
    question: "Lick your ___ after eating this wonderful meal.",
    answers: ["Face", "Fingers", "Hair", "Table"],
    correctAnswer: "Fingers"
}, {
    question: "Who has the best fried chicken and waffles?",
    answers: ["Roscoe`s Chicken & Waffles", "qrious palette", "The Attic", "Bruxie"],
    correctAnswer: "Roscoe`s Chicken & Waffles"
}];

// *** FUNCTIONS
// --------------------------------------

// When start button is clicked
$('#start').on('click', function () {
    // Run the START game function
    game.start();
})

// Object containing our code for the trivia game
var game = {
    // Variable to track number of correct answers
    correct: 0,
    // Variabe to track number of incorrect answers
    incorrect: 0,
    // Variable to set the default number of seconds for the counter
    counter: 20,

    // Function to control the countdown timer
    countdown: function () {
        // Displays the counter on HTML page
        $('#counter').html(game.counter);
        // Counter by one point
        game.counter--;
        // If counter reaches zero
        if (game.counter <= 0) {
            // *** TEST ***
            console.log("DONE");
            // Run end game function
            game.end();
        }
    },

    // Function to start the game
    start: function () {
        // Starts the countdown function to decrease at the speed of 1 second
        timer = setInterval(game.countdown, 1000);
        // Prepends the timer to the HTML page
        $('#main').prepend('<h2 class="text-center display-4 m-5" style="color: #996515">Time: <span id="counter">20</span> Seconds </h2>');
        // Removes start button
        $('#start').remove();
        // For loop to populate the HTML page with questions
        for (var i = 0; i < questions.length; i++) {
            $('#main').append('<h2 class="font-weight-bold">' + questions[i].question + '</h2>');
            // Sub for loop to populate the possible questions with radio buttons
            for (var j = 0; j < questions[i].answers.length; j++) {
                $('#main').append("<div class='form-group'><input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + "<label class='form-check-label'>" + questions[i].answers[j] + "</label></div>")
            }
        }
    },

    // Function to end the game
    end: function () {
        // Runs a function to check each question's selected value with correct answer
        $.each($("input[name='question-0']:checked"), function () {
            // If this question's value is equal to correct answer in questions object
            if ($(this).val() == questions[0].correctAnswer) {
                // Add one point to correct counter
                game.correct++;
                // Else add one point to incorrect counter
            } else {
                game.incorrect++;
            }
        })
        // Checks all questions
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        })
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        })
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        }) 
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        })
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        })
        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        })
        $.each($("input[name='question-7']:checked"), function () {
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        // Calls the score function after the checks are made
        this.score();
    },

    // Function to display the results of quiz
    score: function () {
        // Stop timer
        clearInterval(timer);
        // Remove timer
        $('#main h2').remove();
        // Replaces the questions on the HTML page
        $('#main').html('<h2 class="text-center">Your Score:</h2>');
        // Display delicious winner image
        $('#main').append('<img src="assets/images/winner.jpg" />')
        // Display the score counters for correct, incorrect and questions not answered
        $('#main').append('<h3>Correct: ' + this.correct + '</h3>');
        $('#main').append('<h3>Incorrect: ' + this.incorrect + '</h3>');
        $('#main').append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");

    }
}