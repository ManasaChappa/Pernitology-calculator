//Created by Neelima Ganta, ID : 700693885
// Manasa Chappa, ID : 700693285

var asyncRequest;

//function start
function start(){
	document.getElementById("gmDietPlanButton").addEventListener("click",function(){
		getHtmlFile("GMDietPlan.html");
	},false);
	document.getElementById("xmlDataButton").addEventListener("click",function(){
		getXMLFile("GMDietPlanCustomers.xml");
	},false);
}//end function start

//function for getting html file
function getHtmlFile(url){
	try{
		//instantiate xhr object
		asyncRequest = new XMLHttpRequest();
		asyncRequest.onreadystatechange = function(){
			if(asyncRequest.readyState == 4 && asyncRequest.status == 200){
				clearDiv();
				document.getElementById("resultPara").innerHTML = asyncRequest.responseText;
			}//end if
		}//end anonymous function
		//raise the ajax request
		asyncRequest.open("GET",url,true);
		asyncRequest.send(null);
	}catch(exception){
		alert("XHR failed");
	}//end try/catch
} //end function getHtmlFile

//function for getting xml file
function getXMLFile(url){
	try{
		//alert("hi");
		asyncRequest = new XMLHttpRequest();
		//asyncRequest.onreadystatechange = getCustomerData();
		asyncRequest.addEventListener("readystatechange",getCustomerData,false);
		asyncRequest.open("GET", url, true);
		asyncRequest.send(null);
	}catch(exception){
		alert("XHR failed");
	} //end try/catch
} //end function getXMLFile

function getCustomerData(){
	//alert(asyncRequest.readyState);
	if(asyncRequest.readyState == 4 && asyncRequest.status == 200){
		clearDiv();
		//get the customers from the xml.
		//there may be multiple customers so we are taking an array
		var customers = asyncRequest.responseXML.getElementsByTagName("customer");
		//creating an element and it will be added later to the output
		var customerTable = document.createElement("table");
		//set its id so you can retreive it whwn you want to delete it later.
		customerTable.setAttribute("id","customerTable");
		
		//loop through the customers array and place the customers in the table
		for(var i=0;i < customers.length;i++){
			//get one customer from the customers array
			var customer = customers.item(i);
			
			//get the values of name and age of the customer
			var name = customer.getElementsByTagName("name").item(0).firstChild.nodeValue;
			var age = customer.getElementsByTagName("age").item(0).firstChild.nodeValue;
			
			//create row
			var trow = document.createElement("tr");
			//create cell for Name
			var nameCell = document.createElement("td");
			//createcell for Age
			var agecell = document.createElement("td");
			
			nameCell.innerHTML = name;
			agecell.innerHTML = age;
			
			trow.appendChild(nameCell);
			trow.appendChild(agecell);
			
			//add the row as child for table : one row with two cells now added in this iteration
			customerTable.appendChild(trow);
		}//end for
		
		var output = document.getElementById("xmlContent");
		output.appendChild(customerTable);
		//document.getElementById("xmlContent").innerHTML = customerTable;
	}//end if
	else{
		document.getElementById("xmlContent").innerHTML = "Readystate not equal to 4 or Page not found";
	}
}//end processCredits function

function clearDiv(){
	document.getElementById("resultPara").innerHTML = "";
	document.getElementById("xmlContent").innerHTML = "";
}//end function clearDiv

//Create event listener for load event
window.addEventListener("load",start,false);