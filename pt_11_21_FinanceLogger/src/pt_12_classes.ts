class Invoice0 {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owns $${this.amount} for ${this.details}`;
  }
}

const invoice0 = new Invoice0("Elliot Alderson", "working on Stage 2", 250);
const invoice1 = new Invoice0("Darlene Alderson", "working on Stage 1", 300);

let invoices0: Invoice0[] = [];

invoices0.push(invoice0);
invoices0.push(invoice1);

console.log(invoices0);

invoice0.client = "Tyrel Wellick";
invoice1.amount = 500;

console.log(invoice0.format(), " | ", invoice1.format());
