// --- Basic  Array Methods

// 1. Length
const cars = ["BMW", "Volvo", "Mini", "Audi", "Mercedes"];
console.log(cars.length);

// 2. toString()
const cities = ["Delhi", "Mumbai", "Chennai", "Kolkata"];
console.log(cities.toString());

// 3. at()
const dogs = ["German", "Husky", "Corgi", "Beagle"];
console.log(dogs.at(1));

// 4. join()
const birds = ["Parrot", "Crow", "Pigeon", "Eagle"];
console.log(birds.join(" * "));

// 5. pop()
const laptops = ["Dell", "Lenovo", "HP", "Apple"];
const poppedLaptop = laptops.pop();
console.log( poppedLaptop);
console.log(laptops);

// 6. push()
const phones = ["iPhone", "Samsung", "Xiaomi", "Nokia"];
phones.push("Poco");
console.log(phones);

// 7. shift() - removes the first array element and "shifts" all other elements to a lower index.
const planets = ["Mercury", "Venus", "Earth", "Mars"];
const shiftedPlanet = planets.shift();
console.log(shiftedPlanet);
console.log(planets);

// 8. unshift() - adds an element to the beginning of an array and
const colors = ["Red", "Green", "Blue"];
colors.unshift("Yellow");
console.log(colors);

// 9. 


//1. find()
const ages = [3, 10, 18, 20];

const value = ages.find(function (age) {
	return age > 18;
});
console.log(value);

//2. map()

const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((number) => number * number);
console.log(result);

//3. filter()
const numbersArray = [1, -2, -3, 4, -5];
const positiveNumbers = numbersArray.filter((number) => number > 0);
console.log(positiveNumbers);

//4. reduce()
const numbersArray2 = [1, 2, 3, 4, 5];
const sum = numbersArray2.reduce((total, number) => total + number);
console.log(sum);

//5. forEach()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.forEach((fruit) => console.log(fruit));

//6. every()
const numbersArray3 = [23, 56, 2, 33, 90, 10];
const result1 = numbersArray3.every((number) => number < 100);
console.log(result1);

//7. some()
const names = ["Preethi", "Rajesh", "Bhargav", "Kiran", "John", "Wick"];
const result2 = names.some((name) => name === "Kiran");
console.log(result2);

//8. reverse()
const wordsArray = ["Tin", "Pin", "Win", "Sin", "Bin"];
const reverse = wordsArray.reverse();
console.log(reverse);

//9. flat()
const numbersArray4 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
const numbersArray5 = [[1, 2, 3], [[[4, 5, 6]]], [7, 8, 9]];

console.log(numbersArray4.flat());
console.log(numbersArray5.flat(2));

////////////////////////////////////////////////
//finding Unique values in the array

//using Set
let myArray = ["3", "2", "3", "3", "4", "2", "5", "4", "3", "5", "10"];
let unqElements = [...new Set(myArray)];
console.log(unqElements);

//using filter method
let myArray2 = ["3", "2", "3", "3", "4", "2", "5", "4", "3", "5", "10"];
let unqElements2 = [];

unqElements2 = myArray2.filter(
	(value, index, arr) => arr.indexOf(value) === index
);

console.log(unqElements2);
