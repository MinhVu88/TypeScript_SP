// ARRAYS
let names = ["Maynard Keenan", "Adam Jones", "Dan Carey", "Paul D'Amour"];
let numbers = [25, 7, 88, 3, 9];

// ERROR -> different data types aren't acceptable in 1-type-defined arrays
// names.push(7);
// names[1] = false;
// numbers.push('Layne Staley');
// numbers[2] = 'Jerry Cantrell';

// ERROR -> once a var is declared as an array, it can't be re-assigned something else
// names = 'Aleister Crowley';
// numbers = true;

names.push("Justin Chancellor");
numbers.push(6);

console.log(names, " | ", numbers);

// various data types are acceptable in mixed-types-defined arrays
let mixed = ["eyyo wassup", 47, "Nikola Tesla", false];

mixed.push("Michael Faraday");
mixed.push(23);
mixed[3] = true;

console.log(mixed);

// OBJECTS
let person1 = {
  name: "Humphry Davy",
  occupation: "chemist",
  age: 36
};

console.log(person1);

// ERROR -> notice: additional properties can't be added to an object
// person1.age = '25';
// person1.occupation = [];
// person1.gender = 'male';
// person1 = [];

person1.name = "Hans Christian Ørsted";
person1.age = 32;

console.log(person1);

// update an object
// notice: the number of properties, their names & data types must match the original object's properties
person1 = {
  name: "Marie Curie",
  occupation: "physicist",
  age: 45
};

console.log(person1);
