//Created by Neelima Ganta, ID : 700693885
// Manasa Chappa, ID : 700693285

//start function
function start(){
	document.getElementById("calculateButton").addEventListener("click",calculateWeight,false);
	document.getElementById("clearButton").addEventListener("click",clearAll,false);
} //end function start

function calculateWeight(){
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
	if((!isNaN(age)) && (ageEntered = parseInt(age)) && (ageEntered >= 18)){
		//number is an integer
		//variable to get height feet
		var feet = document.getElementById("feetTextBox").value;
		var inches = document.getElementById("inchesTextBox").value;
		inchesEntered = parseInt(inches);
		
		if((!isNaN(feet)) && (!isNaN(inches)) && (feetEntered = parseInt(feet))){
			//feet and inches entered is an integer
			if(genderEntered == "Female" && feetEntered < 5)
			{
				var weight = Math.round(53.1*1).toFixed(1);
				var weightLbs = (weight*2.2046226218).toFixed(2);
				document.getElementById("resultPara").innerHTML = "Weight in Kgs = " + weight + "</br>";
				document.getElementById("resultPara").innerHTML += "Weight in Lbs = " + weightLbs + "</br>";	
			}
			if(genderEntered == "Female" && (feetEntered >= 5)){
				//calulate weight
				if(feetEntered >= 6){
					calculateFeet = (feetEntered-5);
					inchesEntered += calculateFeet*12
				}
				var weight = Math.round(53.1*1 + 1.36*inchesEntered).toFixed(1);
				var weightLbs = (weight*2.2046226218).toFixed(2);
				document.getElementById("resultPara").innerHTML = "Weight in Kgs = " + weight + "</br>";
				document.getElementById("resultPara").innerHTML += "Weight in Lbs = " + weightLbs + "</br>";
			}
			if(genderEntered == "Male" && feetEntered < 5)
			{
				var weight = Math.round(56.2*1).toFixed(1);
				var weightLbs = (weight*2.2046226218).toFixed(2);
				document.getElementById("resultPara").innerHTML = "Weight in Kgs = " + weight + "</br>";
				document.getElementById("resultPara").innerHTML += "Weight in Lbs = " + weightLbs + "</br>";	
			}
			if(genderEntered == "Male" && (feetEntered >= 5)){
				//calulate weight
				if(feetEntered >= 6){
					calculateFeet = (feetEntered-5);
					inchesEntered += calculateFeet*12
				}
				var weight = Math.round(56.2*1 + 1.41*inchesEntered).toFixed(1);
				var weightLbs = (weight*2.204).toFixed(2);
				document.getElementById("resultPara").innerHTML = "Weight = " + weight + "</br>";
				document.getElementById("resultPara").innerHTML += "Weight in Lbs = " + weightLbs + "</br>";
			}
			
		}else{
			document.getElementById("resultPara").innerHTML = "Invalid input ! Please Try Again"
		}// end if/else
		
	}else{
		document.getElementById("resultPara").innerHTML = "Invalid input Or Age should be greater than 18 ! Please Try Again"
	}// end if/else
} //end function calculateWeight

function clearAll(){
	location.reload();
} // end function clearAll

//load event listener
window.addEventListener("load",start,false);