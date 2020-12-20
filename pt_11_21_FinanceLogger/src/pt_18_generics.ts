// without using generics
const addUID_0 = (obj: object) => {
  let uid = Math.floor(Math.random() * 100);

  return { ...obj, uid };
};

let user0 = addUID_0({ name: "Maynard Keenan", age: 56 });
console.log(user0);

// ERROR: Property 'name' does not exist on type '{uid: number;}'
// console.log(user0.name);

// with generics <T>
const addUID_1 = <T>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);

  return { ...obj, uid };
};

let user1 = addUID_1({ name: "Adam Jones", age: 55 });
console.log(user1.name);

// this makes no sense as normally unique ids aren't attached to strings
// let user2 = addUID_1("Paul D'Amour");
// console.log(user2);

const addUID_2 = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);

  return { ...obj, uid };
};

// this no longer works as addUID_2() now only takes an object as its arg
// let user3 = addUID_2('Reinhard Heydrich');

const addUID_3 = <T extends { isAlive: boolean }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);

  return { ...obj, uid };
};

let user4 = addUID_3({ name: "Justin Chancellor", age: 56, isAlive: true });
console.log("Name: ", user4.name, " | Is alive? ->", user4.isAlive);

// generics with interfaces
interface Resource0<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const user5: Resource0<string> = {
  uid: 1,
  resourceName: "person",
  data: "Heinrich Himmler"
};

console.log(user5);

const user6: Resource0<object> = {
  uid: 2,
  resourceName: "person",
  data: { name: "Adolf Eichmann" }
};

console.log(user6);

const user7: Resource0<string[]> = {
  uid: 3,
  resourceName: "person",
  data: ["J", "o", "s", "e", "p", "h", "G", "o", "e", "b", "b", "e", "l", "s"]
};

console.log(user7);
