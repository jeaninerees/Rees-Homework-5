$(document).ready(function() {

// State the function that will change the photo
$("#form").submit(changePhoto);
// Be careful not to forget your puncuation

// Define the function
function changePhoto(event) {

// Keep the page from automatically reloading
	event.preventDefault();

// Define the variable and its value	
	var city = $("#city-type").val();

// Do the if statements
	if (city == "New York" || city == "NYC" || city == "The Big Apple") {
		$("body").removeClass();
		$("body").addClass("nyc");

	// Display a snappy statment in the console 
		console.log("A helluva town");

	// Clear the form on submission
		document.getElementById("form").reset();
		// The $ is jquery for saying document.getElementBy so you can change this to 

	} else if (city == "San Francisco" || city == "Frisco" || city == "Sanfran"){ 
		$("body").removeClass();
		$("body").addClass("sf");
		console.log("Beware the tech bros");
		document.getElementById("form").reset();

	} else if (city == "Los Angeles" || city == "LA" || city == "L.A." || city == "LAX") {
		$("body").removeClass();
		$("body").addClass("la");
		console.log("Lala land");
		document.getElementById("form").reset();

	} else if (city == "Austin") {
		$("body").removeClass();
		$("body").addClass("austin");
		console.log("Keep Austin weird");
		document.getElementById("form").reset();
	 
	
	} else if (city == "Sydney") {
		$("body").removeClass();
		$("body").addClass("sydney");
		console.log("G'day");
		document.getElementById("form").reset();
	}
	// Tabbing in your code will make it easier to read and debug
	// It's good to have an else statement to capture all of the other possibilities ie if I had added Washington in the input
 }

});