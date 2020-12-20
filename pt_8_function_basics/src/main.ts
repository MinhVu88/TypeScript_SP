let greet: Function;

greet = () => console.log("hi there");

greet();

// ? shows that c is an optional param (always at the end of the param list)
const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
};
add(1, 2);

// c is given 10 as a default value (no ? here & also at the end of the param list)
const multiply = (a: number, b: number, c: number | string = 10) => {
  console.log(a * b);
  console.log(c);
};
multiply(3, 4);
multiply(5, 6, "7");

const subtract = (a: number, b: number) => a - b;

let result1 = subtract(10, 7);
// result1 = 'a string'; // Error -> result1 must be of type number
console.log(result1);

// (a: number, b: number): number -> the return type must be a number
const divide = (a: number, b: number): number => a / b;

let result2 = divide(6, 3);

console.log(result2);
