/*
Author : Rajesh Patnala (GIG0663)
Github : https://github.com/RajeshPatnala
*/

// Comments

// There are two types of comments
// 1. single line comment
// 2. multi line comment

// single line comment

/*
and this 
is the 
multi line
comment
*/

// Conditional Statements

// if... else...

let pi = 3.14;

if (pi > 10) {
	console.log("pi is greater than 10");
} else {
	console.log("pi is less than 10");
}

// ternary operator

const result = pi > 10 ? "pi is greater than 10" : "pi is less than 10";
console.log(result);

// Switch Case

let day = "Sunday";

switch (day) {
	case "Monday":
		console.log("Today is Monday");
		break;
	case "Tuesday":
		console.log("Today is Tuesday");
		break;
	case "Wednesday":
		console.log("Today is Wednesday");
		break;
	case "Thursday":
		console.log("Today is Thursday");
		break;
	case "Friday":
		console.log("Today is Friday");
		break;
	case "Saturday":
		console.log("Today is Saturday");
		break;
	case "Sunday":
		console.log("Today is Sunday");
		break;
	default:
		console.log("Invalid day");
		break;
}

// for loop

for (let count = 0; count < 10; count++) {
	console.log(count);
}

// for-in loop

let person = {
	name: "John",
	age: 30,
	city: "New York",
};

for (let key in person) {
	console.log(key, ":", person[key]);
}

// for-of loop

let fruits = ["apple", "banana", "orange", "grape", "pineapple"];

for (let fruit of fruits) {
	console.log(fruit);
}

// for-each-loop (in this build in function works by using callback function)

const cars = ["BMW", "Volvo", "Mini", "Audi", "Mercedes"];

cars.forEach(function (car, index, array) {
	console.log(car);
	console.log(index);
	console.log(array);
});
