import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class NextBlock extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Next Block", "./NextBlock/costumes/Next Block.svg", {
        x: 0,
        y: 0
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "change costume" },
        this.whenIReceiveChangeCostume
      )
    ];
  }

  *whengreaterthan() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    this.visible = true;
    this.goto(175, 84);
    this.costume = this.random(1, 7);
  }

  *whenIReceiveChangeCostume() {
    this.visible = true;
    this.goto(175, 84);
    this.costume = this.random(1, 7);
  }
}
