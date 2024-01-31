import Unit from "./Unit";

export default class Folder extends Unit {
  private units: Array<Unit> = [];
  constructor(name: string, private size?: string) {
    super(name);
  }

  getSize(): number {
    return this.units.reduce((acc, curr) => acc + curr.getSize(), 0);
  }

  add(unit: Unit) {
    this.units.push(unit);
  }

  private createUnit(unit: Unit, dom: Element) {
    const domUnit = document.createElement("div");
    domUnit.classList.add("unit");
    domUnit.innerHTML = `<div><span>${unit.getName()}</span><span>(${unit.getSize()})</span></div>`;
    dom.append(domUnit);
    return domUnit;
  }

  list(dom: Element) {
    const domUnit = this.createUnit(this, dom);
    const bFolder = this instanceof Folder;
    if (bFolder) {
      this.units.forEach((unit) => {
        if (unit instanceof Folder) {
          unit.list(domUnit); //composite 는 단일체와 집합체를 묶다보니 재귀가 종종 들어간다
        } else {
          this.createUnit(unit, domUnit);
        }
      });
    }
  }
}
