//Created by Neelima Ganta, ID : 700693885
// Manasa Chappa, ID : 700693285

//start function
function start(){
	document.getElementById("calculateButton").addEventListener("click",calculateBMR,false);
	document.getElementById("clearButton").addEventListener("click",clearAll,false);
} //end function start

function calculateBMR(){
	//variable to get input:
	var age = document.getElementById("ageTextBox").value;
	var gender = document.getElementsByName("gender");
	//for getting checked radio button
	for(var i=0;i<gender.length;i++){
		if(gender[i].checked)
			var genderEntered = gender[i].value;
	}// end for
	//variable for validated input
	var ageEntered;
	//validate the input
	//is it number? is it integer?
	if((!isNaN(age)) && (ageEntered = parseInt(age)) && (ageEntered >= 15)){
		//number is an integer
		//variable to get height 
		var height = document.getElementById("heightTextBox").value;
		//variable to get weight 
		var weight = document.getElementById("weightTextBox").value;
		
		if((!isNaN(height)) && (!isNaN(weight)) && (heightEntered = parseInt(height)) && (weightEntered = parseInt(weight))){
			//feet and inches entered is an integer 
			if(genderEntered == "Female"){
				//calulate BMR
				var BMR = Math.round(10*weightEntered+6.25*heightEntered-5*ageEntered-161).toFixed(1);
				document.getElementById("resultPara").innerHTML = "BMR = " + BMR + " Calories/Day </br>";
			}
			if(genderEntered == "Male" && (feetEntered >= 5)){
				//calulate BMR
				var BMR = (10*weightEntered+6.25*heightEntered-5*ageEntered+5).toFixed(1);
				document.getElementById("resultPara").innerHTML = "BMR = " + BMR + "</br>";
			}
			
		}else{
			document.getElementById("resultPara").innerHTML = "Invalid input ! Please Try Again"
		}// end if/else
		
	}else{
		document.getElementById("resultPara").innerHTML = "Invalid input Or Age should be greater than 15 ! Please Try Again"
	}// end if/else
} //end function calculateWeight

function clearAll(){
	location.reload();
} // end function clearAll

//load event listener
window.addEventListener("load",start,false);