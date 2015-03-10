var main = function(){
	
	var $ul = $("<ul>");
	var $li = $("<li>");

	// Using YQL and JSONP
	$.ajax({
	    url: "http://query.yahooapis.com/v1/public/yql",
	 
	    // The name of the callback parameter, as specified by the YQL service
	    jsonp: "callback",
	 
	    // Tell jQuery we're expecting JSONP
	    dataType: "jsonp",
	 
	    // Tell YQL what we want and that we want JSON
	    data: {
	        q: "select * from local.search where query='sushi' and location='san francisco, ca'",
	        format: "json"
	    },
	 
	    // Work with the response
	    success: function( response ) {
	        console.log( response ); // server response

	        var something = response.query.results.Result;
	        console.log(something);

	        var urls = [];

	        something.forEach(function(element){
	        	urls.push(element.BusinessUrl);
	        });

	        console.log(urls);
	        console.log(urls.length);

	        urls.forEach(function(element){
	       		$("#results").append($("<p>").text(element))
	       });

	    }
	});//End .ajax.
};

$(document).ready(main);