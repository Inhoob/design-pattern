import { DigitFactory } from "./DigitFactory";
import { Number } from "./Number";

console.log("flyweight!!");

const factory = new DigitFactory();

const domTarget = document.querySelector("#tmp");

let value = 10000;

setInterval(() => {
  const number = new Number(factory, value);
  number.put(domTarget!);
  value++;
}, 1000);
