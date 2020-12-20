// EXPLICIT TYPES
var user;
var age;
var isLoggedIn;
user = "Elliot Alderson";
age = 27;
isLoggedIn = true;
console.log("User: " + user + " | Age: " + age + " | Logged in? -> " + isLoggedIn);
// ARRAYS
// users1 is declared as a string-filled array, but it hasn't been initialized yet
// that's why calling push() on users1 will result in error
var users1;
// users1 = [7, 9]; // Error
// users1.push('Fernando Vera') // Error
users1 = ["Angela Moss", "Darlene Alderson", "Tyrell Wellick"];
console.log(users1);
// users2 is both declared & initialized as a string-filled array
var users2 = [];
users2.push("Trenton", "Phillip Price", "Shayla Nico");
console.log(users2);
// UNION TYPES
var mixed = [];
mixed.push("Leon");
mixed.push(20);
mixed.push(true);
console.log("Name: " + mixed[0] + " | Age: " + mixed[1] + " | Is a badass? -> " + mixed[2]);
var id;
// id = false; // Error
id = "369";
id = 369;
// OBJECTS
var client1;
client1 = { name: "Ollie Parker", age: 25 };
console.log(client1);
// client1 = 'Leslie Romero'; // Error
client1 = []; // an array is an object
console.log(client1);
var client2;
client2 = {
    name: "Gideon Goddard",
    age: 30,
    isPotential: false
};
console.log(client2);
