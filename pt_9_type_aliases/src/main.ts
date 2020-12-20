// type aliases
type stringOrNum = string | number;
type objectWithName = { name: string; uid: stringOrNum };

const logDetails0 = (uid: string | number, item: string) =>
  console.log(`${item} has a uid of ${uid}`);

logDetails0(47, "'Oumuamua");

const logDetails1 = (uid: stringOrNum, item: string) =>
  console.log(`${item} has a uid of ${uid}`);

logDetails1(13, "Antikythera mechanism");

const greet0 = (user: { name: string; uid: string | number }) =>
  console.log(`${user.name} (${user.uid}) says hi`);

greet0({ name: "Adam Jones", uid: 23 });

const greet1 = (user: objectWithName) =>
  console.log(`${user.name} (${user.uid}) says hi`);

greet1({ name: "Maynard Keenan", uid: 7 });
