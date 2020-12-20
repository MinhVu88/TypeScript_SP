// in tsconfig.json, "module": "commonjs" -> "module": "es2015" &
// "target": "es5" -> "target": "es6"
export class Invoice2 {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owns $${this.amount} for ${this.details}`;
    }
}
