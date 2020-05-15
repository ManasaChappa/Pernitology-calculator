//Created by Neelima Ganta, ID : 700693885
// Manasa Chappa, ID : 700693285

//start function
function start(){
	document.getElementById("calculateButton").addEventListener("click",calculateBMI,false);
	document.getElementById("clearButton").addEventListener("click",clearAll,false);
} //end function start

function calculateBMI(){
	//variable to get input:
	var age = document.getElementById("ageTextBox").value;
	//variable for validated input
	var ageEntered;
	//validate the input
	//is it number? is it integer?
	if((!isNaN(age)) && (ageEntered = parseInt(age)) && (ageEntered >= 18)){
		//number is an integer
		//variable to get height in metres
		var height = document.getElementById("inchesTextBox").value;
		//var to get weight 
		var weight = document.getElementById("weightTextBox").value;
		
		if((!isNaN(weight)) && (!isNaN(height)) && (weightEntered = parseFloat(weight)) && (heightEntered = parseFloat(height))){
			//weight and inches entered is an number 
			//calculateBMI
			var bmi = (weightEntered/Math.pow(heightEntered,2)).toFixed(2);
			document.getElementById("resultPara").innerHTML = "BMI = " + bmi + " kg/m^2 </br>";
			
			if(bmi < 16)
				document.getElementById("resultPara").innerHTML += "Body Mass Index is : Severe Thinness";
			if((bmi >= 16) && (bmi <= 17))
				document.getElementById("resultPara").innerHTML += "Body Mass Index is : Moderate Thinness";
			if((bmi > 17) && (bmi < 18.5))
				document.getElementById("resultPara").innerHTML += "Body Mass Index is: Mild Thinness";
			if((bmi >= 18.5) && (bmi <= 25))
				document.getElementById("resultPara").innerHTML += "Body Mass Index is: Normal";
			if((bmi > 25) && (bmi <= 30))
				document.getElementById("resultPara").innerHTML += "Body Mass Index is: Over Weight";
			if((bmi > 30) && (bmi <= 35))
				document.getElementById("resultPara").innerHTML += "Body Mass Index is: Obese Class1";
			if((bmi > 35) && (bmi <= 40))
				document.getElementById("resultPara").innerHTML += "Body Mass Index is: Obese Class2";
			if(bmi > 40)
				document.getElementById("resultPara").innerHTML += "Body Mass Index is: Obese Class3";
			
			
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