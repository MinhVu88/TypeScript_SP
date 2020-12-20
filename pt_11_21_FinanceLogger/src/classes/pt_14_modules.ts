// in tsconfig.json, "module": "commonjs" -> "module": "es2015" &
// "target": "es5" -> "target": "es6"

import { Formatter } from "../interfaces/pt_16_InterfacesWithClasses.js";

export class Invoice2 implements Formatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owns $${this.amount} for ${this.details}`;
  }
}
