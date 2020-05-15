//Created by Neelima Ganta, ID : 700693885
// Manasa Chappa, ID : 700693285

//start function
function start(){
	document.getElementById("calculateButton").addEventListener("click",calculateDueDate,false);
	document.getElementById("clearButton").addEventListener("click",clear,false);
	
	document.getElementById("due").addEventListener("click", function(){
		clearAll();
	}, false);
	document.getElementById("last").addEventListener("click", function(){
		clearAll();
	}, false);
} //end function start

function calculateDueDate(){
	//variable to BasedOn
	var basedOn = document.getElementsByName("basedOn");
	//for getting checked radio button
	for(var i=0;i<basedOn.length;i++){
		if(basedOn[i].checked)
			var basedOnEntered = basedOn[i].value;
	}// end for
	//variables to get day
	var day = document.getElementById("date");
	var selectedDay = parseInt(day.options[day.selectedIndex].value);
	//variables to get month
	var month = document.getElementById("month");
	var selectedMonth = parseInt(month.options[month.selectedIndex].value);
	//variables to get year
	var year = document.getElementById("yearTextBox").value;
	var yearEntered = parseInt(year);
	//variable to get cycle days
	var cycle = parseInt(document.getElementById("cycleTextBox").value);
	//variable to start date
	var startdate = new Date;
	//variable to Conception date
	var cdate = new Date();
	
	var daymsecs = 60*60*24*1000;
	//set the entered date by using the input values
	startdate.setFullYear(yearEntered);
	startdate.setMonth(selectedMonth-1);	
	startdate.setDate(selectedDay);
	
	if((!isNaN(selectedDay)) && (!isNaN(selectedMonth)) && (!isNaN(yearEntered)) && (!isNaN(cycle))){
		//check whether the input is null or not
		if(((year.length) == 4) && (cycle > 27) && (cycle < 31)){
			//year entered is 4 digit number
			if(basedOnEntered == "LastPeriod"){
				// calculate based on last period
				startdate.setTime(startdate.getTime() + ((cycle * daymsecs) - daymsecs*14));
				cdate.setTime(startdate.getTime());
				document.getElementById("resultPara").innerHTML = "Estimated Conception Date = " + formatted_date(startdate) + "</br>";
				//variable to duedate 
				var duedate = new Date();
				duedate.setTime(startdate.getTime() + daymsecs*266);
				document.getElementById("resultPara").innerHTML += "Estimated Due Date = " + formatted_date(duedate)+ "</br>";
				
				startdate.setTime(startdate.getTime() + daymsecs*70);
				document.getElementById("resultPara").innerHTML += "First Trimester Date = " +formatted_date(startdate)+ "</br>";
				startdate.setTime(startdate.getTime() + daymsecs*105);
				document.getElementById("resultPara").innerHTML += "Second Trimester Date = " +formatted_date(startdate)+ "</br>";
				
			}//end last Period if
			if(basedOnEntered == "DueDate"){
				//calculate based on duedate
				//clearAll();
				document.getElementById("resultPara").innerHTML = "Due  Date = " + formatted_date(startdate) + "</br>";
				var estimateddate = new Date();
				estimateddate.setTime(startdate.getTime() - daymsecs*266);
				document.getElementById("resultPara").innerHTML += "Estimated Conception Date = " + formatted_date(estimateddate) + "</br>";
				
				estimateddate.setTime(estimateddate.getTime() + daymsecs*70);
				document.getElementById("resultPara").innerHTML += "First Trimester = " + formatted_date(estimateddate) + "</br>";
				estimateddate.setTime(estimateddate.getTime() + daymsecs*105);
				document.getElementById("resultPara").innerHTML += "Second Trimester = " + formatted_date(estimateddate) + "</br>";
				
			} //end Due Date if
		}else{
			document.getElementById("resultPara").innerHTML = "Invalid input Or cycle should be greater than 27 or Year should be 4 digits! Please Try Again"
		}//end if/else
		
	}else{
		document.getElementById("resultPara").innerHTML = "Invalid input ! Please Try Again"
	} //end if /else
	
} //end function calculateDueDate
function formatted_date(date) 
{
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December"];
return("" + month[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear());	
} //end function formatted Date

function clearAll(){
	//location.reload();
	document.getElementById("yearTextBox").value = "";
	document.getElementById("cycleTextBox").value = "";
	document.getElementById("month").value = 1;
	document.getElementById("date").value = 1;
	document.getElementById("resultPara").innerHTML = "";
	
} //end function clearAll
function clear(){
	location.reload();
} //end function clear
//load event listener
window.addEventListener("load",start,false);