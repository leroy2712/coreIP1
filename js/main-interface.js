//Retrieve User Form Input From Here

$(document).ready(function(){
	//Interface
    $("#check").click(function(){
        if ($('#name').val().length == 0) {
        	$("#error").text("Please Enter a Username");
        } else{
        	var key = 'fb746626704fb8580965637be55931590261915c';
        	var user = $("#name").val();
        	var myurl = 'https://api.github.com/users/'+ user +'?access_token=' + key;

        	$.get(myurl).then(function(response){
                $("#theResults").append("<li>GitHub Username: <strong>"+response.login+"</strong></li>");
                $("#theResults").append("<li>GitHub Link: <strong>"+response.html_url+"</strong></li>");
                $("#theResults").append("<li>Number of Public Respositories: <strong>"+response.public_repos+"</strong></li>");
                $("#theResults").append("<li>Repository Names: <ul id='repos'></ul></li>");

                var repositories = response.repos_url +'?access_token=' + key;
                $.get(repositories).then(function(results){

                    for(var i = 0; i < results.length; i++) {
                        var obj = results[i];
                        $("#repos").append("<li>"+obj.name+"</li>");
                    }

                });

            }).fail(function(error){
                console.log(error.responseJSON.message);
            });
        }
    }); 
});