$(document).ready(function() {

// State the variable, which is the text entered into the element with the "city-type" id.
var city = $("#city-type").val();

// State the function that will change the photo
$("#submit-btn").click(changePhoto)

// Define the function
function changePhoto(event) {
//Keep the page from automatically reloading
	event.preventDefault();

	if (city == "New York" || "NYC") {
	$("body").removeClass();	
	$("body").addClass("nyc");
	console.log("New York");

	} else if (city == "San Francisco" || "Frisco") { 
	$("body").removeClass();
	$("body").addClass("sf");
	console.log("San Francisco");

	//} else if (city == "Los Angeles" || "LA" || "L.A." || "LAX")
	//$("body").removeClass();
	//$("body").addClass("la");
	//console.log("El Ay");
	
	//} else if (city == "Austin") {
	//$("body").removeClass();
	//$("body").addClass("austin");
	//console.log("Keep Austin weird"); 
	
	//} else if (city == "Sydney") {
	//$("body").removeClass();
	//$("body").addClass("sydney");
	//console.log("G'day");
	}}






}); 