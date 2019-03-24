

// Object containing questions, 4 possible answers and correct answers for each
var questions = [{
    question: "Question 1",
    answers: ["A", "B", "C", "D"],
    correctAnswer: "A"
}, {
    question: "Question 2",
    answers: ["A", "B", "C", "D"],
    correctAnswer: "B"
}, {
    question: "Question 3",
    answers: ["A", "B", "C", "D"],
    correctAnswer: "C"
}, {
    question: "Question 4",
    answers: ["A", "B", "C", "D"],
    correctAnswer: "D"
}];

//  * TEST * REMOVE LATER *
console.log(questions[0].question);
console.log(questions[0].answers);
console.log(questions[0].correctAnswer);
console.log(questions[1].question);
console.log(questions[1].answers);
console.log(questions[1].correctAnswer);
console.log(questions[2].question);
console.log(questions[2].answers);
console.log(questions[2].correctAnswer);
console.log(questions[3].question);
console.log(questions[3].answers);
console.log(questions[3].correctAnswer);


// When start button is clicked
$('#startButton').click(function () {
    // Run the START game function
    game.countdown();
    game.startGame();
});

var game = {
    // Counter - total number of seconds user has to guess
    counter: 3,

    // Function to start countdown
    countdown: function () {
        // Counter is displayed on HTML page
        $('#counter').html("Time: " + game.counter);
        // Counter will begin to decrease by one point
        game.counter--;
        // If time reaches 0, run end game function
        if (game.counter <= -1) {
            // * TEST * REMOVE LATER
            console.log("GAME OVER")
            clearInterval(gameTimer);   
            game.endGame();
        }
    },

    // Function to START the game
    startGame: function () {
        // Remove start button from HTML
        $('#startButton').remove();
        // Timer starts counting down at speed of 1 second
        gameTimer = setInterval(game.countdown, 1000);
        // Reveal all questions and possible answers, starting with #1 
        for (var i = 0; i < questions.length; i++) {
            $('#questionBox').append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                $('#questionBox').append("<input type='radio' name=question='" + i + "'> " + questions[0].answers[j]);
            }
        }
    },

    // Function to END the game
    endGame: function () {
        // Correct - number of questions the user got right
        var correct = 0;
        // Incorrect - number of questions the user got wrong
        var incorrect = 0;
        // Finished message
        $('#counter').html("Test");
        // $("#questionBox").html("Test");
        // All answers are checked for each question 
        $.each($("input[name='question-1']:checked"), function () { 
            // If the user answer matches the correct answer
            if($(this).val()==questions[0].correctAnswer) {
                // Add one point to correct answers
                correct++;
            } else {
                // Else
                // Add one point to incorrect
                incorrect++;
            }
        })
        $.each($("input[name='question-2']:checked"), function () { 
            if($(this).val()==questions[1].correctAnswer) {
                correct++;
            } else { 
                incorrect++;
            }
        })
        $.each($("input[name='question-3']:checked"), function () { 
            if($(this).val()==questions[2].correctAnswer) {
                correct++;
            } else { 
                incorrect++;
            }
        })
        $.each($("input[name='question-4']:checked"), function () { 
            if($(this).val()==questions[3].correctAnswer) {
                correct++;
            } else { 
                incorrect++;
            }
        })
    
    console.log(correct);
    console.log(incorrect);

    this.results();
    },
 
    // Function to show RESULTS page
    results: function () {
        // Clear timer
        clearInterval(gameTimer);
        // Show results
            $('questionContainer').remove();
            // Correct answers
            $('questionContainer').append("Correct :" + this.correctAnswer);
            // Incorrect answers
            // Unanswered
    }

}