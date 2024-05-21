/*
Author : Rajesh Patnala (GIG0663)
Github : https://github.com/RajeshPatnala
*/

// =============== (JavaScript Basic Array Methods) ===============

// 0. Array() - create an array

const networks = new Array("Facebook", "Instagram", "Twitter", "LinkedIn");
console.log(networks);
// ----------------------------------------------------------------------------------------------

// 1. Length - get the length of the array

const cars = ["BMW", "Volvo", "Mini", "Audi", "Mercedes"];
console.log(cars.length);
// ----------------------------------------------------------------------------------------------

// 2. toString() - convert an array to a string

const cities = ["Delhi", "Mumbai", "Chennai", "Kolkata"];

console.log(cities.toString());
// ----------------------------------------------------------------------------------------------

// 3. at() - get the element at the specified index

const dogs = ["German", "Husky", "Corgi", "Beagle"];

console.log(dogs.at(1));
// ----------------------------------------------------------------------------------------------

// 4. join() - join the elements of an array using specific separator

const birds = ["Parrot", "Crow", "Pigeon", "Eagle"];

console.log(birds.join(" * "));
// ----------------------------------------------------------------------------------------------

// 5. pop() - remove an element at the end of the array

const laptops = ["Dell", "Lenovo", "HP", "Apple"];
const poppedLaptop = laptops.pop();

console.log(poppedLaptop);
console.log(laptops);
// ----------------------------------------------------------------------------------------------

// 6. push() - add an element to the end of an array

const phones = ["iPhone", "Samsung", "Xiaomi", "Nokia"];
phones.push("Poco");

console.log(phones);
// ----------------------------------------------------------------------------------------------

// 7. shift() - removes the first array element and "shifts" all other elements to a lower index.

const planets = ["Mercury", "Venus", "Earth", "Mars"];
const shiftedPlanet = planets.shift();
console.log(shiftedPlanet);

console.log(planets);
// ----------------------------------------------------------------------------------------------

// 8. unshift() - adds an element to the beginning of an array.

const colors = ["Red", "Green", "Blue"];
colors.unshift("Yellow");

console.log(colors);
// ----------------------------------------------------------------------------------------------

// 9. Delete - Using delete() leaves undefined holes in the array. This is bad practice. Use pop() or shift() instead.

const brands = ["Puma", "Nike", "Adidas", "Reebok"];
delete brands[1];

console.log(brands);
// ----------------------------------------------------------------------------------------------

// 10. Changing Elements

const metals = ["Gold", "Silver", "Copper", "Zinc"];
metals[1] = "Rhodium";

console.log(metals);
// ----------------------------------------------------------------------------------------------

// 11. concat() - Array Concatenation - The concat method creates a new array by merging (concatenating) existing arrays:

/*The concat() method does not change the existing arrays. It always returns a new array.
The concat() method can take any number of array arguments.*/
const family = ["Mom", "Dad", "Brother", "Sister"];
const dressCodes = ["Casual", "Formal", "Party", "Work", "Gym"];
const all = family.concat(dressCodes);

console.log(all);

// Example : 2
const alpha = ["A", "B", "C", "D", "E"];
const num = [1, 2, 3, 4, 5];
const symb = ["@", "#", "$", "%", "^"];
const alphanumsymb = alpha.concat(num, symb);

console.log(alphanumsymb);

// Example : 3 - The concat Method can also take strings as arguments:
const storageDevices = ["SSD", "HDD", "SATA", "SAS", "NVMe"];
const newStorageDevices = storageDevices.concat("USB");

console.log(newStorageDevices);
// ----------------------------------------------------------------------------------------------

// 12. copyWithin() - copies array elements within the array
/* 
			The copyWithin() method overwrites the existing values.
			The copyWithin() method does not add items to the array.
			The copyWithin() method does not change the length of the array. 
*/
const countries = [
	"India",
	"USA",
	"UK",
	"Canada",
	"Australia",
	"Japan",
	"China",
];
countries.copyWithin(2, 0); // Copy to index 2, all elements from index 0 to index 2:

console.log(countries);

// Example : 2
const rivers = ["Nile", "Yangtze", "Amazon", "Mississippi"];
rivers.copyWithin(2, 1, 2); // Copy to index 2, all elements from index 1 to index 2:

console.log(rivers);
// ----------------------------------------------------------------------------------------------

// 13. flat() -  Method creates a new array with sub-array elements concatenated to a specified depth.

const numbersArray4 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
const numbersArray5 = [[1, 2, 3], [[[4, 5, 6]]], [7, 8, 9]];

console.log(numbersArray4.flat());
console.log(numbersArray5.flat(2));
// ----------------------------------------------------------------------------------------------

// 14. splice() - Removes elements from an array and, if necessary, inserts new elements in their place.

const states = ["Karnataka", "TamilNadu", "Kerala", "AndhraPradesh"];
states.splice(2, 0, "Maharashtra", "Goa");

console.log(states);

/* The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Maharashtra" , "Goa") define the new elements to be added.
The splice() method returns an array with the deleted items:
*/

const splicedStates = states.splice(1, 2); // 1 is the starting index and 2 is the number of elements to be removed
console.log(splicedStates);
// ----------------------------------------------------------------------------------------------

// 15. toSpliced() - ES2023 - The toSpliced() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).

const userNames = ["Rajesh", "Suresh", "Kishore", "Srinu", "Krishna"];
// const splicedUserNames = userNames.toSpliced(1, 3);
// console.log(splicedUserNames);
// ----------------------------------------------------------------------------------------------

// 16. slice() - Extracts a section of an array and returns a new array
/*
	The slice() method creates a new array.
	The slice() method does not remove any elements from the source array.
*/
const chemicals = ["Chlorine", "Sodium", "Potassium", "Calcium"];
const slicedChemicals = chemicals.slice(1, 3); // 1 is the starting index and 3 is the ending index (3 is not included)

console.log(slicedChemicals);
console.log(chemicals);
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/* =============== (JavaScript Array Search) =============== */

// 1. indexOf() - returns the index of the first occurrence of a specified element in an array

let medicean = ["Paracetamol", "Ibuprofen", "Acetaminophen", "Aspirin"];
let indexOfParacetamol = medicean.indexOf("Paracetamol"); // if not found returns -1
let indexOfAspirin = medicean.indexOf(1, "Acetaminophen"); // 1st argument is the starting index
console.log(indexOfParacetamol, indexOfAspirin);
// ----------------------------------------------------------------------------------------------

// 2. lastIndexOf() - Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

let quality = [
	"144p",
	"240p",
	"360p",
	"480p",
	"720p",
	"1080p",
	"2160p",
	"4K",
	"720p",
];
let lastIndexOf720p = quality.lastIndexOf("720p");
console.log(lastIndexOf720p);
// ----------------------------------------------------------------------------------------------

// 3. includes() - The includes() method returns true if an array contains a specified element.

let beverages = ["Coke", "Pepsi", "MountainDew", "Sprite"];
let includesCoke = beverages.includes("Coke");
console.log(includesCoke);
// ----------------------------------------------------------------------------------------------

//4. find() - The find() method returns the value of the first array element that passes a test function.

let ages = [3, 10, 18, 20];
let result = ages.find(function (value, index, array) {
	return value > 10;
});

console.log(result);
// ----------------------------------------------------------------------------------------------

// 5. findIndex() - The findIndex() method returns the index of the first element in an array that satisfies the provided testing function.

let guns = ["AK47", "M16", "Shotgun", "MP5", "Uzi", "SniperRifle", "MP5"];
let index = guns.findIndex(function (value, index, array) {
	return value === "MP5";
});

console.log(index);
// ----------------------------------------------------------------------------------------------

// 6. findLast() - The findLast() method returns the value of the last array element that passes a test function.

let marks = [205, 35, 335, 198, 542, 153, 475, 95, 315];
let marksResult = marks.findLast(function (value, index, array) {
	return value > 300;
});

console.log(marksResult);
// ----------------------------------------------------------------------------------------------

// 7. findLastIndex() - The findLastIndex() method returns the index of the last element in an array that satisfies the provided testing function.

let money = [10, 20, 50, 100, 200, 10, 500, 2000];
let moneyResult = money.findLastIndex(function (value, index, array) {
	return value < 15;
});

console.log(moneyResult);
// ----------------------------------------------------------------------------------------------

/* =============== (JavaScript Array Iteration) =============== */

// 1. forEach() - The forEach() method calls a function (a callback function) once for each element in an array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.forEach((fruit, index, array) => console.log(fruit));
// ----------------------------------------------------------------------------------------------

// 2. map() - The map() method creates a new array with the results of calling a provided function on every element in the calling array.

const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map((number, index, array) => number * 2);

console.log(newNumbers);
// --------------------------------------------------------------------------------

// 3. flatMap() - The flatMap() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const numbersArray = [1, 2, 5];
const newNumbersArray = numbersArray.flatMap((number) =>
	number === 5 ? [10, 20, 30] : number
);

console.log(newNumbersArray);

// Example : 2
const arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]
// ----------------------------------------------------------------------------------------------

// 4. filter() - The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const mixedNumbers = [1, -2, -3, 4, -5];
const positiveNumbers = mixedNumbers.filter(
	(number, index, array) => number > 0
);

console.log(positiveNumbers);
// ------------------------------------------------------------------------------------------------

// 5. reduce() - The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const reduceArray = [2, 4, 6, 8, 10];
const sum = reduceArray.reduce(
	(accumulator, currentValue, index, array) => accumulator + currentValue,
	10
); // 10 is the assigned value for accumulator, initially accumulator = 0

console.log(sum);
// ------------------------------------------------------------------------------------------------

// 6. reduceRight()
/*	The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
	The reduceRight() works from right-to-left in the array. See also reduce().
	The reduceRight() method does not reduce the original array. */

const reduceRightArray = [2, 4, 6, 8, 10];
const sumRight = reduceRightArray.reduceRight(
	(accumulator, currentValue) => accumulator + currentValue,
	10
); // 10 is the assigned value for accumulator, initially accumulator = 0

console.log(sumRight);
// ------------------------------------------------------------------------------------------------

// 7. every() - The every() method tests whether all elements in the array pass the test implemented by the provided function.

const everyArray = [2, 4, 6, 8, 10];
const isEven = everyArray.every((number, index, array) => number % 2 === 0);

console.log(isEven);
// ------------------------------------------------------------------------------------------------

// 8. some() - The some() method checks if some array values pass a test.

const someArray = [1, 2, 5, 10, 20, 50, 100, 200, 500];
const isLessThan100 = someArray.some((number, index, array) => {
	return number > 100;
});

console.log(isLessThan100);
// ------------------------------------------------------------------------------------------------

// 9. values() - The values() method returns an Iterator object with the values of an array.

const courses = ["HTML", "CSS", "JS", "React", "Python"];
const courseValues = courses.values(); // creates an Iterator object with the values

for (let value of courseValues) {
	console.log(value);
}
// ------------------------------------------------------------------------------------------------

// 10. from() - The from() method creates an array from an object.

const fromArray = { 0: "a", 1: "b", 2: "c", length: 4 };
const fromArrayResult = Array.from(fromArray);

console.log(fromArrayResult);
// ------------------------------------------------------------------------------------------------

// 11. keys() - The keys() method creates a new Array Iterator object that contains the keys for each index in the array.

const diseases = ["Fever", "Cough", "Headache", "Sore Throat"];
const keys = diseases.keys();

for (let key of keys) {
	keys[key] = "Value" + key;
	console.log(key);
}

console.log(keys);
// ------------------------------------------------------------------------------------------------

// 12. entries() - The entries() method creates a new Array Iterator object that contains the key/value pairs for each index in the array. The entries() method does not change the original array.

const vehicles = ["Car", "Bus", "Truck", "Bike"];
const entries = vehicles.entries();

for (let x of entries) {
	console.log(x);
}
// ------------------------------------------------------------------------------------------------

// 13. with() - ES2023 - The with() method is as a safe way to update elements in an array without altering the original array.

const sweets = ["Chocolate", "Strawberry", "Vanilla", "Mango"];
// const updatedSweets = sweets.with(0, "Lemon");
// console.log(updatedSweets);
// ------------------------------------------------------------------------------------------------

// 14. Array Spread(...) - The spread() method is used to expand an array.

const spreadArray = [1, 2, 3, 4, 5];
const spreadArray2 = [6, 7, 8, 9, 10];
const spreadArray3 = [11, 12, 13, 14, 15];

const newSpreadArray = [...spreadArray, ...spreadArray2, ...spreadArray3];
console.log(newSpreadArray);
// ------------------------------------------------------------------------------------------------

// 15. Array.isArray() - The isArray() method returns true if an object is an array, otherwise false.

const sampleArray = ["a", "b", "c"];
const resultArray = Array.isArray(sampleArray);

console.log(resultArray);
// ------------------------------------------------------------------------------------------------

// 16. Array.of() - The of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

const icons = Array.of("🍕", "🍔", "🍟", "🍕", "🍔", "🍟");
console.log(icons);
// ------------------------------------------------------------------------------------------------

// 17. Prototype - prototype allows you to add new properties and methods to arrays.

const Bike = function (color, price) {
	this.color = color;
	this.price = price;
};

const bike = new Bike("Red", 1000);
Bike.prototype.company = "BMW";

console.log(bike);
// ------------------------------------------------------------------------------------------------

// =============== (JavaScript Array Sort) ===============

// Alphabetic sort

// 1. sort() - The method sorts the array in alphabetical order.

const berries = [
	"Blackberry",
	"Blueberry",
	"Raspberry",
	"Strawberry",
	"Cranberry",
	"Acaiberry",
	"Gojiberry",
	"Elderberry",
];
berries.sort();

console.log(berries);
// ------------------------------------------------------------------------------------------------

// 2. reverse() - The method reverse the array.

const citrus = [
	"Lemon",
	"Orange",
	"Lime",
	"Pomelo",
	"Satsuma",
	"Ponkan",
	"Fingerlime",
];
citrus.reverse();

console.log(citrus);
// ------------------------------------------------------------------------------------------------

// 3. toSorted() - ES2023 - The toSorted() method as a safe way to sort an array without altering the original array.

/* The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array. */
const flyingObjects = ["Airplane", "Helicopter", "Drone", "Spaceship"];
// const sortedObjects = flyingObjects.toSorted();

// console.log(sortedObjects);
// ---------------------------------------------------------------------------------------------

// 4. toReversed() - ES2023 - The toReversed() method as a safe way to reverse an array without altering the original array.

/* The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array. */

const marvelCharacters = [
	"Spiderman",
	"Ironman",
	"Hulk",
	"Black Panther",
	"Captain America",
	"Thor",
];
// const reversedCharacters = marvelCharacters.toReversed();

// console.log(reversedCharacters);
// -----------------------------------------------------------------------------------------------

// Numeric sort
/*
		By default, the sort() function sorts values as strings.
		This works well for strings ("Apple" comes before "Banana").
		If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
		Because of this, the sort() method will produce incorrect result when sorting numbers.
		You can fix this by providing a compare function:
*/

// 1. Numbers are sorted in ascending or descending order.

const score = [100, 50, 25, 60, 8, 5, 1];
score.sort(function (a, b) {
	return a - b; // Ascending order
	return b - a; // Descending order
});

console.log(score);
// ------------------------------------------------------------------------------------------------

// 2. Sorting an array in random order

const points = [40, 100, 1, 5, 25, 10];
points.sort(function () {
	return 0.5 - Math.random();
});

console.log(points);
// ------------------------------------------------------------------------------------------------

// 3. Finding min and max values.

const values = [0, 9, 8, 7, 5, 7, 2, 4, 6, 10, 15, 18, 98];
// Example: 1
const ass = values.sort((a, b) => a - b);
const minval = ass[0];
const maxval = ass[ass.length - 1];
console.log(minval, maxval);

// Example: 2
const min = Math.min(...values);
const max = Math.max(...values);
console.log(min, max);
// ------------------------------------------------------------------------------------------------

// 4. Sorting Objects Array

const userDetails = [
	{ name: "John", age: 30 },
	{ name: "Jane", age: 20 },
	{ name: "Peter", age: 25 },
	{ name: "Paul", age: 28 },
	{ name: "Mary", age: 18 },
	{ name: "Mike", age: 35 },
];
const sortedUsers = userDetails.sort((a, b) => a.name - b.name);

console.log(sortedUsers);

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
