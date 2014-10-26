/* for (var number=100; number; number=number-1) {
	if (number % 3 == 0) {
		console.log('fizz');
	} else {
		if (number % 5 == 0) {
			console.log('fizzbuzz');
		} else {
			console.log(number);
		};
	};
} 

var friends = ["Nick", "Michael", "Amit", "Allison Grayce", ];
console.log(friends);
console.log(friends.length);
console.log(friends[0].length);

var friendNumber = 1;
console.log(friends[friendNumber]);

for(var i=0; i < 4; i+=1) {
	console.log(friends[i]) ; 


// OBJECTS

var me = {
	first_name: "Mallory",
	last_name: "Burke",
	"Employee Number": 1
}
console.log(me.first_name);
console.log(me.last_name);
console.log(me["Employee Number"]);

var key = "first_name"

console.log(me[key]);}*/

//FUNCTIONS
var sayHello = function () {
	var message = "Heya";
	message = message + "Biatch";
	console.log(message)
}

var debug = function (message) {
	console.log("Debug", message);
}

var doubleNumber = function(num) {
	return num * 2;
}

debug(doubleNumber(7));

sayHello();

var x = 1;

debug("x has been initialized");
sayHello();

x+= 10;
var y = 100;
debug("x has been increased.  y has been set");
sayHello()