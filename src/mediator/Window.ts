import Mediator from "./Mediator";
import Participant from "./Participant";

export default class Window extends Participant {
  private bClosed = true;
  constructor(mediator: Mediator) {
    super(mediator);
  }

  displayState(dom: HTMLElement): void {
    dom.innerHTML = this.bClosed ? "window closed" : "window open";
    if (this.bClosed) dom.classList.remove("highlighting");
    else dom.classList.add("highlighting");
  }

  open() {
    if (this.bClosed) {
      this.bClosed = false;
      this.mediator.participantChanged(this);
    }
  }
  close() {
    if (!this.bClosed) {
      this.bClosed = true;
      this.mediator.participantChanged(this);
    }
  }
  isClosed() {
    return this.bClosed;
  }
}
