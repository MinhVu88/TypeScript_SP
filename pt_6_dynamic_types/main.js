// DYNAMIC/ANY TYPES
var age = 25;
console.log(age, typeof age);
age = true;
console.log(age, typeof age);
age = "twenty-five";
console.log(age, typeof age);
age = { value: "25" };
console.log(age, typeof age);
var mixed = [];
mixed.push("Tool");
mixed.push(462);
mixed.push(true);
console.log(mixed);
var person;
person = { name: "Reinhard Heydrich", age: 35 };
console.log(person);
person = { name: 25, age: "Heinrich Himmler" };
console.log(person);
