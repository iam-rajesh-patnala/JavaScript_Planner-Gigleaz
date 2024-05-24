/*
Author : Rajesh Patnala (GIG0663)
Github : https://github.com/RajeshPatnala
*/

// =============== (JavaScript Functions) ===============

// 1. Definition
/*
A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

The name of the function.
A list of parameters to the function, enclosed in parentheses and separated by commas.
The JavaScript statements that define the function, enclosed in curly braces,   {...}
*/
//-----------------------------------------------------------------------------------------------

// 2. Declaration & calling
function groot() {
	// function declaration
	console.log("I am groot");
}

groot(); // function calling
// -----------------------------------------------------------------------------------------------

// 3. Function closures
function king(Kname) {
	return function queen(Qname) {
		return function prince(Pname) {
			return (
				"My Name is " +
				Pname +
				", I am prince. Son of " +
				Qname +
				" and " +
				Kname
			);
		};
	};
}

const prince = king("Krishna")("Ganga");
console.log(prince("kanna"));
//------------------------------------------------------------------------------------------------

// 4. Arrow functions
const foo = () => {
	return "Iam a foo Arrow function";
};

console.log(foo()); // function arrow

//Shorthand notation
const meme = () => console.log("I am groot");
meme(); //

// This is called IIFE - Arrow function without name
(() => {
	console.log("I am an IIFE (Immediately Invoked Arrow Function)");
})();

// This is called IIFE - Function expression
(function IIFE() {
	console.log("I am an IIFE (Immediately Invoked Function Expression)");
})();

// 5. Scope,Call apply bind
// Scope

let x = 10; // Global scope
function myFunction() {
	var carName = "Volvo"; // Function Scope
	return carName;
}

console.log(myFunction());

// Call
const userDetails = {
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
};
const user1 = {
	firstName: "John",
	lastName: "Doe",
};
const user2 = {
	firstName: "Mary",
	lastName: "Doe",
};

// This will return "John Doe":
let result = userDetails.fullName.call(user1);
console.log(result);

// Apply
const person2 = {
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
};

const person3 = {
	firstName: "Mary",
	lastName: "Doe",
};

// This will return "Mary Doe":
person2.fullName.apply(person3);

// Bind
const person4 = {
	firstName: "John",
	lastName: "Doe",
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
};

const member = {
	firstName: "Hege",
	lastName: "Nilsen",
};

let fullName = person4.fullName.bind(member);
console.log(fullName());

// 6. Set time out & set intervals

// Set time out
setTimeout(function () {
	console.log("I am timeout");
}, 2000);

// Set interval
setInterval(function () {
	console.log("I am interval");
}, 1000); // 1000 = 1 second

// 7. This keyword
let person = {
	firstName: "Peter",
	lastName: "Holly",
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
};
console.log(person.fullName());
