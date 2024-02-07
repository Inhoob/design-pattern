import Item from "./item";

export default class Sword implements Item {
  use(): string {
    return "칼로 삭 베기";
  }
}
