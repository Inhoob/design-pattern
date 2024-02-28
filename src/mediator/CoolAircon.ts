import Mediator from "./Mediator";
import Participant from "./Participant";

export default class HeatBoiler extends Participant {
  private bOff = true;
  constructor(mediator: Mediator) {
    super(mediator);
  }

  displayState(dom: HTMLElement): void {
    dom.innerHTML = this.bOff ? "aircon 꺼짐" : "aircon 가동중";
    if (this.bOff) dom.classList.remove("highlighting");
    else dom.classList.add("highlighting");
  }

  off() {
    if (this.bOff) {
      return;
    }
    this.bOff = true;
    this.mediator.participantChanged(this);
  }
  on() {
    if (!this.bOff) {
      return;
    }
    this.bOff = false;
    this.mediator.participantChanged(this);
  }
  isRunning() {
    return !this.off;
  }
}
