export enum Action {
  UP = 1,
  DOWN = 2,
  LEFT = 3,
  RIGHT = 4,
}

export class Memento {
  private _actions = new Array<Action>();
  get actions() {
    return this._actions;
  }
  constructor(private _x: number, private _y: number, actions: Array<Action>) {
    this._actions = structuredClone(actions);
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
}

export default class BlindMan {
  private actions = new Array<Action>();
  constructor(
    private currentX: number,
    private currentY: number,
    private targetX: number,
    private targetY: number
  ) {}

  walk(action: Action): number {
    this.actions.push(action);
    if (action === Action.UP) this.currentY += 1;
    if (action === Action.DOWN) this.currentY -= 1;
    if (action === Action.LEFT) this.currentX -= 1;
    if (action === Action.RIGHT) this.currentX += 1;
    return Math.sqrt(
      Math.pow(this.targetX - this.currentX, 2) +
        Math.pow(this.targetY - this.currentY, 2)
    );
  }

  createMemento(): Memento {
    return new Memento(this.currentX, this.currentY, this.actions);
  }

  restoreMemento(memento: Memento) {
    this.currentX = memento.x;
    this.currentY = memento.y;
    this.actions = structuredClone(memento.actions);
  }

  resultPath(): string {
    return this.actions.map((action) => Action[action]).join("->");
  }
}
