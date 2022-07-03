class SkyUnit {
  constructor() {}
  run = () => {
    console.log("날라서 도망가자!!");
  };
}

class GroundUnit {
  size = 1;
  constructor(qqq) {
    this.size = qqq;
    console.log(this.size);
  }
  run = () => {
    console.log("뛰어서 도망가자!!" + this.size + "M 앞으로");
  };
}

class Monster extends GroundUnit {
  power = 10;
  constructor(aaa) {
    super(300);
    this.power = aaa;
  }

  attack = () => {
    console.log("공격하자!!!");
    console.log("내 공격력은 " + this.power + " 이야!!");
  };
}

const mymonster1 = new Monster(11);
mymonster1.attack();
mymonster1.run();
