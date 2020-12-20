// example 1
// in the signature, "=> void" means the funtion returns nothing/void
let greet0: (a: string, b: string) => void;

greet0 = (name: string, greeting: string) =>
  console.log(`${name} says ${greeting}`);

greet0("Justin Chancellor", "eyyo wassup");

// example 2: the function must return a number
let calculate: (a: number, b: number, c: string) => number;

calculate = (num1: number, num2: number, action: string) => {
  if (action === "+") {
    return num1 + num2;
  } else if (action === "-") {
    return num1 - num2;
  } else if (action === "*") {
    return num1 * num2;
  } else if (action === "/") {
    return num1 / num2;
  } else {
    return NaN;
  }
};

console.log(calculate(1, 2, "/"));

// example 3
let logDetails: (obj: { name: string; age: number }) => void;

type person = { name: string; age: number };

logDetails = (user: person) =>
  console.log(`${user.name} is ${user.age} years old`);

logDetails({ name: "Dan Carey", age: 60 });
