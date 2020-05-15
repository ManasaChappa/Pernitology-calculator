//Created by Neelima Ganta, ID : 700693885
// Manasa Chappa, ID : 700693285

//DOM ready

$(document).ready(function(){
	
	
	$("#textButton").on("click", function(){
		$("#customersTable").empty();
		$.get("ketoDietPlan.txt", function(data){
			//alert(data);
			$("#textAjax").html(data);
		}); //end get
	}); //end click
	
	//json array with each looping
	$("#jsonButton").click(function(){
		$("#textAjax").empty();
		$("#customersTable").empty();
		
		//start ajax request
		$.ajax({
			url : "ketoDietPlanCustomers.json",
			dataType : "json",
			success : function(data){
				var output;
				$(data.customers).each(function(){
					var customersRow = document.createElement("tr");
					var nameTD = document.createElement("td");
					var ageTD = document.createElement("td");
					var zipTD = document.createElement("td");
					
					$(nameTD).text(this.name);
					$(ageTD).text(this.age);
					$(zipTD).text(this.zip);
					
					$(customersRow).append(nameTD,ageTD,zipTD);
					
					$("#customersTable").append(customersRow);
				}) //end each
			}, //end success
		}); //end ajax
	}); //end click
	
}); //end ready