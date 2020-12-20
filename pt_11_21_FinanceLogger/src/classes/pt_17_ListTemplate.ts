/* This class does 2 things:
- Register a list container (the ul tag, whose class is "item-list" in index.html)
  in the constructor

- Create a render method to render a new 'li' template to the container
  + Args: invoice/payment, a heading, a position
  + Creating the html template (li, h4, p)
  + Adding the 'li' template to the start/end of the list  
*/
import { Formatter } from "../interfaces/pt_16_InterfacesWithClasses";

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(item: Formatter, heading: string, position: "start" | "end") {
    const li = document.createElement("li");

    const h4 = document.createElement("h4");

    const p = document.createElement("p");

    h4.innerText = heading;

    li.append(h4);

    p.innerText = item.format();

    li.append(p);

    position === "start"
      ? this.container.prepend(li)
      : this.container.append(li);
  }
}
