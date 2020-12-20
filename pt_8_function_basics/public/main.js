"use strict";
var greet;
greet = function () { return console.log("hi there"); };
greet();
// ? shows that c is an optional param (always at the end of the param list)
var add = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
add(1, 2);
// c is given 10 as a default value (no ? here & also at the end of the param list)
var multiply = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a * b);
    console.log(c);
};
multiply(3, 4);
multiply(5, 6, "7");
var subtract = function (a, b) { return a - b; };
var result1 = subtract(10, 7);
// result1 = 'a string'; // Error -> result1 must be of type number
console.log(result1);
// (a: number, b: number): number -> the return type must be a number
var divide = function (a, b) { return a / b; };
var result2 = divide(6, 3);
console.log(result2);
