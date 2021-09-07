/*
Access the form element using the method getElementById()
The following URL will help you to do this:
https://www.javascript-coder.com/javascript-form/getelementbyid-form/
*/

var length = document.getElementById('txtLength').value; 
var width = document.getElementById('txtWidth').value; 
var height = document.getElementById('txtHeight').value; 

/*
Also store the tdCost id element as a variable.
The following link will help you to do this:
https://www.w3schools.com/jsref/met_document_getelementbyid.asp
*/

var form = document.getElementById("inputs");
var output = document.getElementById("tdCost");

/*
select the "Calculate Cost" and "Reset" buttons by
getting their elements by ID. Add an event handler code to an
onclick event. The Calculate Cost button should run the function
that calculates the costs and the Reset button should run the
function that resets the text boxes and output.
The links below will help you to do this:
https://www.w3schools.com/js/js_htmldom_document.asp
https://www.w3schools.com/jsref/event_onclick.asp
*/

var btnCalcCost = document.getElementById("btnCalcCost");
var btnReset = document.getElementById("btnReset");

/*
Create a function that calculates the surface area.

Get the value of each variable you created at the beginning
and store each value as a new variable.
https://www.javascript-coder.com/javascript-form/getelementbyid-form/

Test whether the user has entered a number in
the text boxes and return an alert if non-numbers are entered. If
numbers have been entered into the text boxes, calculate the surface area
and return the result. You can use the following links to help you with this.
https://www.w3schools.com/js/js_functions.asp
https://www.w3schools.com/jsref/jsref_isNaN.asp
*/

function surfaceArea() {
	var surfaceArea = (2*l*h + 2*w*h + w*l);
	return total;
	};

function calcGlueCost(d, w, h) {
	total = (2 * d) + (2 * w) + (4 * h);
	return total;
};

var calcSurface = calcSurfaceArea();
var calcGlue = calcGlueCost();

}; 

var surfaceArea = surfaceArea(); 
var length = length.value; 
var width = width.value;
var height = height.value;  
}; 

/*
Create a function that calculates the length of the edges
and returns the result.
You can use the following link to help you with this.
https://www.w3schools.com/js/js_functions.asp

At the beginning of your function get the value of each variable you
created at the beginning of your program and store each value as a new variable.
https://www.javascript-coder.com/javascript-form/getelementbyid-form/
*/

function edgeLength() {
	var edgeLength = (4*h + 4*w + 4*l); 
	return total; 
}; 

/*
create a function that stores the results of the previous functions
as variables. Use a conditional statement to determine the thickness
of the glass and calculate the cost of the glass. You can use the URL
below to help you do this:
https://www.w3schools.com/js/js_if_else.asp

Calculate the cost of the glue, labour, sub-total, tax and total cost.

Use the .toFixed() method to round the result to two decimal places.
You can use the URL below to help you do this:
https://www.w3schools.com/jsref/jsref_tofixed.asp
*/

btnCalcCost.onclick = function() {

var length = document.getElementById("txtLength").value;
var width = document.getElementById("txtWidth").value;
var height = document.getElementById("txtHeight").value;


function finalCost  () {

	//glass 
	if (height < 25) {
          surfaceCost = surface * glass6cm
		thickness = "6cm"; 
      } else {
		surfaceCost = surface * glass4mm;
		thickness = "4mm";
      }; 

	// glue 
	var glueCost = calcGlueCost(depth, width, height) * glue;

	// labour 
	var labourCost = surface / labour;

	// subtotal
	var subtotal = surfaceCost + glueCost + labourCost;
	
	// Calculate total cost
		var total = (subtotal * gst).toFixed(2);

}; 

/*
Create a function named resetInputs to reset the inputs (Length, Width, Height).
Use this link to help https://www.w3schools.com/js/tryit.asp?filename=tryjs_form_reset
Also reset the output (tdCost). Use this link to help you do this
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_innerhtml_delete
*/

btnReset.onclick = function() {
	form.reset();
	output.innerHTML = "";
};
