import Animal from "./Animal";
import Cat from "./Cat";
import Dog from "./Dog";
import Tiger from "./Tiger";
import TigerAdapter from "./TigerAdapter";

const list = Array<Animal>();

list.push(new Dog("댕이"));
list.push(new Cat("솜털이"));
list.push(new Cat("츄츄"));
list.push(new TigerAdapter("타이가오"));
// const tiger = new Tiger();
// tiger.name = "타타타";
// list.push(tiger); //Argument of type 'Tiger' is not assignable to parameter of type 'Animal'. 이걸 위해서 tiger adaptor 클래스 추가해야함.

list.forEach((animal) => {
  animal.sound();
});
