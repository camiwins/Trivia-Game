// GLOBAL VARIABLES

$('#start').click(function () {
    game.start();
});

// An object with all the questions and possible answers

var questions = [{
    question: "Question 1"",
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

// FUNCTIONS

// 
var game = {
    correct: 0,
    incorrect: 0,
    counter: 10,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up!")
            game.done();
        }
    },

    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>')
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
    },

    done: function() {
        $.each($('input[name="question-1]":checked')),function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        }
    }
}

// CALLED FUNCTIONS

// Click button to start the game
