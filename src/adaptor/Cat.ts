import Animal from "./Animal";
export default class Cat extends Animal {
  sound(): void {
    console.log(`${this.name}가 냐옹`);
  }
  constructor(protected name: string) {
    super(name);
  }
}
