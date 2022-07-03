function zzz(aaa) {
  console.log("=============");
  console.log(aaa);
  console.log("=============");
}

@zzz
class AppController {}

// public
class Aaa {
  constructor(public mypower) {
    this.mypower = mypower;
  }

  ggg() {
    console.log("안녕하세요");
  }
}
const aaa = new Aaa(50);
aaa.mypower = 5;
// private
class Bbb {
  constructor(private mypower) {
    this.mypower = mypower;
  }

  ggg() {
    this.mypower = this.mypower;
    console.log("안녕하세요.");
  }
}

const bbb = new Bbb(50);

// readonly
class Ccc {
  constructor(readonly mypower) {
    this.mypower = mypower;
  }

  ggg() {
    this.mypower = this.mypower;
    console.log("안녕하세요.");
  }
}
