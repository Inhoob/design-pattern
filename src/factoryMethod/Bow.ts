import Item from "./item";

export default class Bow implements Item {
  use(): string {
    return "샥 쏘기";
  }
}
