// NOTE: pt_14_modules.js, not pt_14_modules.ts
// because after all, ts files are compiled down to js files
// so that the browser can import & use them
import { Invoice2 } from "./classes/pt_14_modules.js";
import { Payment } from "./classes/pt_16_Demo.js";
import { ListTemplate } from "./classes/pt_17_ListTemplate.js";
const invoice4 = new Invoice2("Elliot Alderson", "working on Stage 2", 250);
const invoice5 = new Invoice2("Darlene Alderson", "working on Stage 1", 300);
let invoices2 = [];
invoices2.push(invoice4);
invoices2.push(invoice5);
invoices2.forEach(i => console.log(i.format()));
let doc1;
let doc2;
doc1 = new Invoice2("Walter White", "empire businesses", 51);
doc2 = new Payment("Jesse Pinkman", "ATM machines", 350);
let docs = [];
docs.push(doc1);
docs.push(doc2);
console.log(docs);
console.log("\n**************************************************\n\n");
// Finance Logger Project
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// create a ListTemplate instance that takes "ul" (HTMLUListElement) as an arg
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // implementing a tuple
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        // doc = new Invoice2(toFrom.value, details.value, amount.valueAsNumber);
        doc = new Invoice2(...values);
    }
    else {
        // doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
        doc = new Payment(...values);
    }
    console.log(doc);
    list.render(doc, type.value, "end");
});
