$(document).ready(function(){ 
    $('.title').fadeIn(1500);
    $('.intro').fadeIn(1500);
    var questions = [
    {
    question : "What is the largest country in the world?", 
    choices : ["USA", "China", "Indonesia", "Canada" ], 
    answer : "China"
    },
    {
    question : "What is the second largest country in the world?", 
    choices : ["USA", "Mexico", "Indonesia", "Canada"], 
    answer : "Canada"
    }
    ];

    var userCorrect = 0;
    var questionNumber = 0;
    var questionTotal = questions.length;

    $('.main').hide();
    $('.results').hide();
    
    $('#start-btn').on('click', function() {
        $('.intro').hide();
        $('.restults').hide();
        $('.main').fadeIn(700);
        createQuestion();
    });
    $('.question-wrapper').on('click', 'li', function(){
           var userSelect = $(this).html();
           console.log(userSelect);
           var correctSelection = questions[questionNumber].answer;
           if (userSelect === correctSelection) {
                userCorrect++;
                console.log(userCorrect);
           }
    });
    
    $('.question-wrapper').on('click', 'li', function(){
        if (questionNumber+1 === questionTotal) {
            $('.results').fadeIn(300);
            $('#report').text("You got " + userCorrect + " out of " + questionTotal);
            $('.main').hide();
        }
        else {
            questionNumber++;
            createQuestion();
        } 
    });
    
    $('#again').on('click', function(){
        $('.results').hide();
        $('.main').fadeIn(300);
        questionNumber = 0;
        userCorrect = 0;
        createQuestion();
        
    })
    
    function createQuestion() {
        $('#question').text(questions[questionNumber].question);
        $('.progress').text("Question " + (questionNumber+1) + " of " + questionTotal);
        $('.answers').empty();
        var choicesTot = questions[questionNumber].choices.length;
        for (var i = 0; i < choicesTot; i++) {
            $('.answers').append("<li>" + questions[questionNumber].choices[i] + "</li>");
        };
    };  
});
    






    
    

    
    
    
    
    
    
