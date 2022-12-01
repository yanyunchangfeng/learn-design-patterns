/**
 * 里氏替换原则
 * 尽可能使用父类或者抽象类
 * 任何在能使用父类的地方都要可以使用子类
 * 多态有关系
 */
// abstract class AbstractDrink {
//   abstract getPrice(): number;
// }
class AbstractDrink {
  getPrice(): number {
    return 1;
  }
  sum(a: number, b: number): number {
    return a + b;
  }
}
class CocaCola extends AbstractDrink {
  getPrice(): number {
    return 3;
  }
  sum(a: number, b: number) {
    // 不符合替换原则
    return 0;
  }
}
class Sprite extends AbstractDrink {
  getPrice(): number {
    return 4;
  }
}
class Fanta extends AbstractDrink {
  getPrice(): number {
    return 5;
  }
}

class Customer {
  drink(abstractDrink: AbstractDrink) {
    console.log("花费" + abstractDrink.getPrice());
  }
}
// 里氏替换 可以替换，任何可以传父类的地方，都可以把子类传进去
// 里氏替换是一个原则，要求子类不能违反父类的功能和规定
let c1 = new Customer();
c1.drink(new AbstractDrink());
c1.drink(new CocaCola());
c1.drink(new Sprite());
c1.drink(new Fanta());
export {};
