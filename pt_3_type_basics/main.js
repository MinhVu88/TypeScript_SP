var character = "Hannibal Lecter";
var age = 30;
var isSmart = true;
// ERROR -> once a var is assigned a certain data type, it can't be re-assigned a different data type
// character = 20;
// age = '25';
// isSmart = 'false';
character = "Will Graham";
age = 25;
isSmart = true;
// explicitly declare the data type of a function's param
var circumference = function (diameter) { return diameter * Math.PI; };
// ERROR
// console.log(circumference("hi"));
console.log(circumference(7.5));
