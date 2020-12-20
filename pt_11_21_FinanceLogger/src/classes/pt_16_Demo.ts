import { Formatter } from "../interfaces/pt_16_InterfacesWithClasses.js";

export class Payment implements Formatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}
