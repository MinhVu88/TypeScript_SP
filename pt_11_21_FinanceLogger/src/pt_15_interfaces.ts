interface Person {
  name: string;
  age: number;
  speak(language: string): void;
  walk(distance: number): number;
}

const person: Person = {
  name: "Adam Jones",
  age: 55,
  speak(lang: "English"): void {
    console.log(`${this.name} speaks ${lang}`);
  },
  walk(miles: number): number {
    console.log(`${this.name} walks ${miles} everyday`);

    return miles;
  }
};

console.log(person);

const greet = (p: Person) => console.log(`Hello ${p.name}`);

greet(person);
