const anchor0 = document.querySelector("a");

console.log(anchor0);

// Error -> TS doesn't know for sure if there's an actual a tag in index.html
// console.log(anchor0.href);

// solution 1: use "?" right after anchor0
console.log(anchor0?.href);

// solution 2
if (anchor0) console.log(anchor0.href);

// solution 3: use "!" right after querySelector()
const anchor1 = document.querySelector("a")!;

console.log(anchor1.href);

console.log("\n****************************************\n");

// form1's' type is HTMLFormElement
// if there's only 1 form on the page, then TS knows getting the right one
const form1 = document.querySelector("form")!;

// form2's' type is Element
// if there are multiple forms on the page, classes/ids are used to target them
// but then, TS wouldn't know for sure if the class/id that's passed to querySelector()
// is actually a form. Therefore, form2's type is just generally Element, unlike form1
const form2 = document.querySelector(".new-item-form")!;

// solution for cases like form2: use Type Casting -> "as HTMLFormElement"
const form3 = document.querySelector(".new-item-form") as HTMLFormElement;

console.log(form3.children);
