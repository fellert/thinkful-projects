 $(document).ready(function() {
    $('.add-item').submit(function(event) {
       event.preventDefault();
       var item = $('#input-text').val();
       if (item !== "") {
        $('.list').prepend('<li>' + item + '<i id="delete" class=ion-ios-close-empty></i>' + '</li>');
        $('#input-text').val("");
       }
       else {
            alert("Please add to cart");
       }
    }); 
    $('ul').on('click', 'li', function() {
       $(this).css("text-decoration", "line-through"); 
    });
    $('ul').on('click', '#delete', function(event) {
        $(this).parent().fadeOut(300);
    });   
});

