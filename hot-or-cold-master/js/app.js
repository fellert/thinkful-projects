$(document).ready(function(){
    
    var computerChoice = Math.floor((Math.random()* 100) + 1);
    var count = 0;
    var previousGuess = []; 
    console.log(computerChoice);
    
   

    $('#guessButton').on('click', function(event){
        event.preventDefault();
        userGuess = parseInt($('#userGuess').val());
        if (confirmGuess(userGuess) == true) {
            checkGuess(userGuess);
        }
        $('#userGuess').val('');
        console.log(previousGuess);
    })

    function confirmGuess(guess){
        if (isNaN(guess)) {
            changeFeedback("Please enter a number");
            return false;
        }
        else if (guess < 1 || guess > 100) {
            changeFeedback("Please enter a number between 1 and 100");
            return false;
        }
        else {
            counter();
            $('#guessList').append('<li>'+guess+'</li>');
            previousGuess.push(userGuess);
            return true;
        }
    }
    
    function checkGuess(guess) {
        var difference = Math.abs(guess - computerChoice);
        if (guess === computerChoice){
            changeFeedback("You guessed it!");
        }
        else if (difference >= 40) {
            changeFeedback("Freezing cold");
        }
        else if (difference >= 30) {
            changeFeedback("Cold");
        }
        else if (difference >= 20) {
            changeFeedback("Warm");
        }
        else if (difference >= 15) {
            changeFeedback("Getting warmer");
        }
        else if (difference >= 10) {
            changeFeedback("Hot");
        }
        else if (difference >= 5) {
            changeFeedback("Very hot!");
        }
        else if (difference <= 5) {
            changeFeedback("Almost there!");
        }
    }
    
    function changeFeedback(change) {
        $('#feedback').text(change);
    }
    
    function counter(){
        $('#count').text(count+1);
        count++;
    }

    
    $('.new').on('click', function(){
        event.preventDefault();
        computerChoice = Math.floor((Math.random()* 100) + 1);
        count = 0;
        $('#count').text(0);
        $('#userGuess').val('');
        $('#guessList').html('');
        $('#feedback').text('Make your Guess!');
        console.log(computerChoice);
    })
    
    
    /*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
    });

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


