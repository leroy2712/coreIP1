var findUser = require('./../js/main.js').findUserModule;

$(document).ready(function(){
	//Interface
    $("#check").click(function(){
        if ($('#name').val().length == 0) {
        	$("#error").text("Please Enter a Username");
        } else{
            var user = $("#name").val();
            var gitInfo = new findUser();
        	gitInfo.getInfo(user);        }
    }); 
});