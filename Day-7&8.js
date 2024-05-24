/*
Author : Rajesh Patnala (GIG0663)
Github : https://github.com/RajeshPatnala
*/

// =============== (JavaScript Basic Object Methods) ===============

// 1. object-definition

/* Objects let you group related data together and split code into logical pieces. */
let value1 = "value1";
let value2 = "value2";
let value3 = "value3";

const obj = {
	property1: value1, // property name may be an identifier
	2: value2, // or a number
	"property n": value3, // or a string
};

console.log(obj.property1, obj[2], obj["property n"]);
// ----------------------------------------------------------------------------------------------

// 2. object-properties
// Accessing Object Properties
//                                  You can access object properties in two ways:
const phone = {
	company: "Apple",
	name: "iPhone",
	"model name": "XS Max",
	year: 2021,
};

console.log(phone.company); // using dot notation - this is called "property access"
console.log(phone["model name"]); // using bracket notation - this is called "string interpolation"
// ----------------------------------------------------------------------------------------------

// Adding New Properties
const laptop = {
	company: "Dell",
	name: "XPS 15",
	year: 2021,
};

laptop.color = "black"; // adding new property if it doesn't exist -- this is called "property assignment".
console.log(laptop);

laptop.name = "Alienware"; // if property already exists, it will be overwritten.
console.log(laptop);
//----------------------------------------------------------------------------------------------

// 3. object-methods
const user1 = {
	firstName: "Tony",
	lastName: "Stark",
	age: 65,
	country: "USA",
	fullName: function () {
		// this is object method
		return this.firstName + " " + this.lastName;
	},
};

console.log(user1.fullName());
//-----------------------------------------------------------------------------------------------

// 4. object-constructors
const victum3 = {
	firstName: "John",
	lastName: "Doe",
	age: 60,
	eyeColor: "blue",
};

let text = victum3.constructor;

console.log(text);
//----------------------------------------------------------------------------------------------

// 5. accessing-array-of-objects
let objArr = [
	{
		name: "john",
		age: 12,
		gender: "male",
	},
	{
		name: "jane",
		age: 15,
		gender: "female",
	},
	{
		name: "julie",
		age: 20,
		gender: "trans",
	},
];

console.log("First Object in the Array using the [] notation:");
console.log(objArr[0]);

// Example: 2

// Array of objects
let objArr2 = [
	{
		name: "john",
		age: 12,
		gender: "male",
	},
	{
		name: "jane",
		age: 15,
		gender: "female",
	},
	{
		name: "julie",
		age: 20,
		gender: "trans",
	},
];

console.log("Accessing the value using the [] and DOT notations:");
console.log(objArr2[1].gender);
// ----------------------------------------------------------------------------------------------

// 6. handling-json-data
const user = '{"name": "John", "age": 30, "city": "New York"}';
const obj2 = JSON.parse(user); // convert JSON string to object

console.log(obj2.name, obj2.age, obj2.city);

const cars = {
	company: "BMW",
	model: "X5",
	year: "2020",
	color: "black",
};
const json = JSON.stringify(cars); // convert object to JSON string

console.log(json);

//-----------------------------------------------------------------------------------------------
// 7. object-destructuring
const fruits = {
	apple: "red",
	orange: "orange",
	mango: "yellow",
};

const { apple, orange, mango } = fruits;

console.log(apple, orange, mango);
