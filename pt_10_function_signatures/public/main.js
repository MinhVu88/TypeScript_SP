"use strict";
// example 1
// in the signature, "=> void" means the funtion returns nothing/void
var greet0;
greet0 = function (name, greeting) {
    return console.log(name + " says " + greeting);
};
greet0("Justin Chancellor", "eyyo wassup");
// example 2: the function must return a number
var calculate;
calculate = function (num1, num2, action) {
    if (action === "+") {
        return num1 + num2;
    }
    else if (action === "-") {
        return num1 - num2;
    }
    else if (action === "*") {
        return num1 * num2;
    }
    else if (action === "/") {
        return num1 / num2;
    }
    else {
        return NaN;
    }
};
console.log(calculate(1, 2, "/"));
// example 3
var logDetails;
logDetails = function (user) {
    return console.log(user.name + " is " + user.age + " years old");
};
logDetails({ name: "Dan Carey", age: 60 });
