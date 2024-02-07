import Bow from "./Bow";
import Factory, { ItemName } from "./Factory";
import Shield from "./Shield";
import Sword from "./Sword";
import Item from "./item";

class ItemCount {
  private _currentCount = 0;
  constructor(private _maxCount: number) {}
  get maxCount() {
    return this._maxCount;
  }
  isCreatable(): boolean {
    return this._currentCount < this._maxCount;
  }
  increaseCount() {
    if (this.isCreatable()) this._currentCount++;
  }
}

export default class ItemFactory extends Factory {
  private repository = new Map<ItemName, ItemCount>();

  constructor() {
    super();
    this.repository.set("sword", new ItemCount(3));
    this.repository.set("shild", new ItemCount(5));
    this.repository.set("bow", new ItemCount(2));
  }

  protected isCreatable(name: ItemName): boolean {
    const itemCount = this.repository.get(name);
    return itemCount.isCreatable();
  }
  protected createItem(name: ItemName): Item {
    if (name === "sword") return new Sword();
    if (name === "shild") return new Shield();
    if (name === "bow") return new Bow();
  }
  protected postprocessItem(name: ItemName): void {
    const itemCount = this.repository.get(name);
    if (itemCount) itemCount.increaseCount();
  }
}
