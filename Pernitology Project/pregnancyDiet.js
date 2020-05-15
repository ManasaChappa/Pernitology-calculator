//Created by Ganta
//ID:700693885
$(document).ready(function(){
	//event listener for numbers button
	$("#routineBtn").on("click", function(){
		//ajax with jquery
		//start ajax request
		$.ajax({
			url: "Routines.php",
			type: "GET",
			data: {sendBack:"routine"},
			success: function(data){
				console.log('successful');
				$("#routineResult").text(data);
			}, //end success
			error: function(xhr, textStatus, errorThrown){
				alert("An error occured!" + (errorThrown? errorThrown: xhr.status + "" +textStatus));
			} //end error
		}); //end ajax
	}); //end quote button
}); //end ready