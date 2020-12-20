// access modifiers: public, private & readonly
class Invoice1 {
  //   readonly client: string;
  //   private details: string;
  //   public amount: number;

  //   constructor(c: string, d: string, a: number) {
  //     this.client = c;
  //     this.details = d;
  //     this.amount = a;
  //   }

  // the same as above, but concise
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    // Error -> "client" is readonly/immutable
    //   this.client = 'sth else';

    return `${this.client} owns $${this.amount} for ${this.details}`;
  }
}

const invoice2 = new Invoice1("Elliot Alderson", "working on Stage 2", 250);
const invoice3 = new Invoice1("Darlene Alderson", "working on Stage 1", 300);

let invoices1: Invoice1[] = [];

invoices1.push(invoice2);
invoices1.push(invoice3);

invoices1.forEach(i => {
  // Error -> "details" is private/inaccessible outside the class
  // console.log(i.details);

  // Error -> "client" is readonly/immutable
  //   i.client = 'something else';

  console.log(i.client);

  console.log(i.amount);

  console.log(i.format());
});
