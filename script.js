

var reset = function(i){

    for (var x = 0; x < i; x++) {
        for (var y = 0; y < i; y++) {
            $("#container").append("<div class='inner'></div>");
            
        }
    }
    $('.inner').width(500/i).height(500/i);
    $('.inner').hover(function(){
		$(this).addClass('newColor').removeClass('inner');

	});
}




$(document).ready(function(){
    $('#mybutton').click(function(){
    	$("div").empty();
       var newNum = prompt("enter a number: ");
       reset(newNum);

   });
});


