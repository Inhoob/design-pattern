import CoolAircon from "./CoolAircon";
import Door from "./Door";
import HeatBoiler from "./HeatBoiler";
import Mediator from "./Mediator";
import Participant from "./Participant";
import Window from "./Window";

export default class SmartHome implements Mediator {
  door = new Door(this);
  window = new Window(this);
  aircon = new CoolAircon(this);
  heatBoiler = new HeatBoiler(this);

  participantChanged(participant: Participant): void {
    if (participant === this.door && !this.door.isClosed()) {
      this.aircon.off();
      this.heatBoiler.off();
    }

    if (participant === this.window && !this.window.isClosed()) {
      this.aircon.off();
      this.heatBoiler.off();
    }

    if (participant === this.aircon && !this.aircon.isRunning()) {
      this.heatBoiler.off();
      this.window.close();
      this.door.close();
    }

    if (participant === this.heatBoiler && !this.heatBoiler.isRunning()) {
      this.aircon.off();
      this.window.close();
      this.door.close();
    }
  }

  display() {
    const dom1 = document.querySelector(".door") as HTMLElement;
    const dom2 = document.querySelector(".window") as HTMLElement;
    const dom3 = document.querySelector(".coolaircon") as HTMLElement;
    const dom4 = document.querySelector(".heatboiler") as HTMLElement;
    this.door.displayState(dom1);
    this.window.displayState(dom2);
    this.aircon.displayState(dom3);
    this.heatBoiler.displayState(dom4);
  }

  install() {
    const dom1 = document.querySelector(".door") as HTMLElement;
    const dom2 = document.querySelector(".window") as HTMLElement;
    const dom3 = document.querySelector(".coolaircon") as HTMLElement;
    const dom4 = document.querySelector(".heatboiler") as HTMLElement;
    dom1.addEventListener("click", () => {
      this.door.isClosed() ? this.door.open() : this.door.close();
      this.display();
    });
    dom2.addEventListener("click", () => {
      this.window.isClosed() ? this.window.open() : this.window.close();
      this.display();
    });
    dom3.addEventListener("click", () => {
      this.aircon.isRunning() ? this.aircon.off() : this.aircon.on();
      this.display();
    });
    dom4.addEventListener("click", () => {
      this.heatBoiler.isRunning()
        ? this.heatBoiler.off()
        : this.heatBoiler.on();
      this.display();
    });
    this.display();
  }
}
