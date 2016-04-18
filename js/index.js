$(document).ready(function() {

// State the function that will change the photo
$("#form").submit(changePhoto)

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

	} else if (city == "San Francisco" || city == "Frisco" || city == "Sanfran") { 
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
 }

}); 