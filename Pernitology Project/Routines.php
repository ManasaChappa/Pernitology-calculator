<?php
	if ($_GET ){
		randomRoutine();
	}//end if
	function randomRoutine(){
		$quoteArray = file ('pregnancyDietPlan.txt');
		//file() method reads a text file into an array. each line becomes an element.
		$randNumber = mt_rand(0, count($quoteArray)-1); //random number between 1 and number of elements in the array.
		unset($_GET);
		echo $quoteArray[$randNumber]; //display a random element from the quotes array.	
	}//end randomQuote
?>