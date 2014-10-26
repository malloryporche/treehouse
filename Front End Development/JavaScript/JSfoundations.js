/* JavaScript Foundations: Variables */
/*
var color = "red";

var myDiv = document.getElementById('myDiv');
myDiv.style.background = "black";
myDiv.style.color = "#ffffff";


// SCOPE 

var world = "World!"; //Defined globally and can be called frm within/without any function

function sayHello () {
	var hello = "Hello ";

	function inner() {
		var extra = " There is more"
		console.log(hello + world + extra)
	}

	inner();
}

sayHello();

console.log("world outside sayHello(): ", world);

// HOISTING 

function doSomething(doit) {

	var color = "blue";
	if (doit) {
		var color = "red";
		console.log("Color in if(){}", color)
	}

	console.log("Color after if(){}", color)
}

// doSomething(false);
doSomething(true);


// STRINGS

var me = {
	first_name: "Mallory",
	last_name: "Jefferson",
	boyfriend: "Dennis"

}

console.log(me.first_name.toLowerCase())

// TEST EQUALITY OF TWO STRINGS 

var first = "Fuck"
var second = "fuck"

// Test for equality in context of an IF statement

if (first < second) {
	console.log("The strings are equal");
}	else {
	console.log("The strings are different");
}

if (first.toLowerCase() === second) {
	console.log("Strings are equal");
}	else {
	console.log("nah homie they different");
}

//ARRAYS

var x = ["some", "kinda", "wonderful"];
console.log(x);

// GETTING AND SETTING VALUES --> ARRAYS

var my_array = ["Hello", 42, true, function(a) {return a *2}];

var word = my_array[0];
var answer = my_array[1];
var doubler = my_array[3];
console.log(doubler(10))



//METHODS

//PUSH & POP

var my_array = [2,3,4];

//PUSH: pushihng a value onto the end of our array; appends new val to end of our array

console.log(my_array.toString)

*/

//EXAMPLES

var button = document.getElementById('action');
var input = document.getElementById('text_field');

button.addEventListener('click', function () {
	console.log('clicked');
});

button.addEventListener('click', function () {
	console.log('Other Click');
	input.setAttribute('value', "Hello World");

})



