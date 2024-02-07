import Item from "./item";

export default class Shield implements Item {
  use(): string {
    return "방패로 삭 막기";
  }
}
