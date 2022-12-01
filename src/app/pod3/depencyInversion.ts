/**
 * 依赖倒置原则
 * 依赖抽象，而非依赖具体的实现
 */

interface GirlFriend {
  age: number;
  height: number;
  cook(): void;
}
class WangSong implements GirlFriend {
  age: number = 30;
  height: number = 170;
  cook() {
    console.log("红烧鲫鱼");
  }
}
class BeiWoGirl implements GirlFriend {
  age: number = 22;
  height: number = 160;
  cook() {
    console.log("炒土豆丝");
  }
}

class SingleDog {
  constructor(public girlFriend: GirlFriend) {}
}
let cf = new SingleDog(new WangSong());
let cfn = new SingleDog(new BeiWoGirl());
