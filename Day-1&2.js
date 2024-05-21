/*
Author : Rajesh Patnala (GIG0663)
Github : https://github.com/RajeshPatnala
*/

// 1. Data Types

// Primitive types

let str = "String";
let num = 10;
let bool = false;
let symbol = Symbol("Symbol");
let nullType = null;
let undefinedType;

// Non-Primitive types

let arr = [1, 2, 3, 4, 5];
let obj = {
	name: "John",
	age: 25,
	isMarried: false,
};

function test() {
	console.log("Hello World");
}

// 2. var, let, const

var a = 10; // function scoped, global
let b = 20; // block scoped, local, global - we can reassign the value
const c = 30; // block scoped, local, global - we can't reassign the value

// 3. assignment operators

let x = 10;
x += 5;
x -= 5;

let y = 20;
y *= 5;
y /= 5;

let z = 30;
z %= 5;

let xyz = 40;
xyz **= 5;

let numb = 10;
numb &= 5;

let numb1 = 20;
numb1 |= 5;

let numb2 = 30;
numb2 ^= 5;

let numb3 = 40;
numb3 >>= 5;

let numb4 = 50;
numb4 <<= 5;

// 4. arithmetic operators

let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;
let num5 = 50;

let sum = num1 + num2;
let sub = num3 - num4;
let mul = num5 * num1;
let div = num2 / num3;
let mod = num4 % num5;
let exp = num1 ** num2;
let inc = ++num1;
let dec = --num2;

// 5. comparison operators

let num11 = 10;
let num22 = 20;

console.log(num11 == num22);

let num33 = 30;
let num44 = 40;

console.log(num33 != num44);

let num55 = 50;
let num66 = 60;

console.log(num55 > num66);

let num77 = 70;
let num88 = 80;

console.log(num77 < num88);

let num99 = 90;
let num1010 = 100;

console.log(num99 >= num1010);

let num111 = 110;
let num1212 = 120;

console.log(num111 <= num1212);

let num1313 = 130;
let num1414 = 140;

console.log(num1313 === num1414);

let num1515 = 150;
let num1616 = 160;

console.log(num1515 !== num1616);

let num1717 = 170;
let num1818 = 180;

console.log(num1717 == num1818);

let num1919 = 190;
let num2020 = 200;

console.log(num1919 != num2020);

// 6. logical operators

let num2121 = 210;
let num2222 = 220;

console.log(num2121 && num2222);

let num2323 = 230;
let num2424 = 240;

console.log(num2323 || num2424);

let num2525 = 250;
let num2626 = 260;

console.log(!num2525);

// 7. undefined vs not-defined

let undefinedVariable; // the value is undefined

console.log(undefinedVariable);

// console.log(example); // Here example is not defined

// 8. Hoisting

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope, prior to execution of code.

console.log(start());
function start() {
	return "Start";
}
