$(document).ready(function(){
    $('button').on('click', function(e){
        e.preventDefault();
        $('.results').html('');
        var query = $(this).html();
        getLeads(query);
    });   
});



var showLeads = function(value) {
    var result = $('.lead-result').clone();
    var title = result.find('.title');
        title.text(value.title);
    return result;
};


var getLeads = function(query) {
    var request = {
        api_key: "4A094XnfeDKRk5G1xcMKQKKd",
        sources: query
    };
    $.ajax({
        url: "https://api.trade.gov/trade_leads/search?",
        data: request,
        dataType: "json",
        type: "GET"
    })
    .done(function(result){
        $.each(result.results, function(index, value){
            console.log(value.title);
            var opportunities = showLeads(value);
            $('.results').append(opportunities);
        });
    })
    .fail(function() {
        alert('error');
    });
               
};


