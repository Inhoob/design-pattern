import Item from "./item";

export type ItemName = "sword" | "shild" | "bow";

export default abstract class Factory {
  protected abstract isCreatable(name: ItemName): boolean;
  protected abstract createItem(name: ItemName): Item;
  protected abstract postprocessItem(name: ItemName): void;

  create(name: ItemName): Item | null {
    if (!this.isCreatable(name)) return null;
    const item = this.createItem(name);
    this.postprocessItem(name);
    return item;
  }
}
