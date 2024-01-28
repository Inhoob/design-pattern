import { Digit } from "./Digit";

export class DigitFactory {
  private pool: Array<Digit | null> = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];

  getDigit(n: number) {
    if (!this.pool[n]) {
      this.pool[n] = new Digit(`../../src/flyweight/data/${n}.json`);
      console.log(this.pool[n]);
    }
    return this.pool[n];
  }
}
