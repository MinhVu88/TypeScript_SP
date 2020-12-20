"use strict";
const person = {
    name: "Adam Jones",
    age: 55,
    speak(lang) {
        console.log(`${this.name} speaks ${lang}`);
    },
    walk(miles) {
        console.log(`${this.name} walks ${miles} everyday`);
        return miles;
    }
};
console.log(person);
const greet = (p) => console.log(`Hello ${p.name}`);
greet(person);
