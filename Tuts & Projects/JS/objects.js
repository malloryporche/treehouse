//OBJECTS

//PROTOTYPES PART I

var personPrototype = {
	name: 'Anonymous',
	greet: function (name, mood) {
		name = name || "You";
		mood = mood || "good";

	console.log("Hello, " + name +
				" I am" + this.name +
				" and I am in a " + mood + " mood!")
	},
	species: 'Homo Sapien'
};

//Constructor Function: special funciton for CREATING and INITIALIZING new OBJECTS

function Person (name) {// argument is the information we want to override in the orig. PROTOTYPES
	this.name = name;  // obj. w/ special property.  Knows what
}

Person.prototype = personPrototype; // prototype is an object in JS, this makes everything work

jim = new Person("Jim");  //takes the prototype value of the function we're calling, and then gives the value
						  // assigns the value to 'this'


//PROTOYPES PART II 

nick = new Person("Nick");

//Can change the properties of prototypes after creation!