// . 外观模式(Facade Pattern)又叫门面模式，定义一个将子系统的一组接口集成在一起的高层接口，已提供一个一致的外观
// . 外观模式让外界减少与子系统内多个模块的直接交互，从而减少耦合，让外界可以更轻松地使用子系统
// . 该设计模式由以下角色组成
//     . 门面角色：外观模式的核心。它被客户角色调用，它熟悉子系统的功能。内部根据客户角色的需求预定了几种功能的组合
//     . 子系统角色：实现了子系统的功能。它对客户角色和Facade是未知的
//     . 客户角色：通过调用Facade来完成要实现的功能
// . 遥控器、自动驾驶汽车、房屋中介
//门面模式

class Sum<T extends number> {
  sum(a: T, b: T): T {
    return (a + b) as T;
  }
}
class Minus<T extends number> {
  minus(a: T, b: T): T {
    return (a - b) as T;
  }
}
class Multiply<T extends number> {
  multiply(a: T, b: T): T {
    return (a * b) as T;
  }
}
class Divide<T extends number> {
  divide(a: T, b: T): T {
    return (a / b) as T;
  }
}
class Calculator<T extends number> {
  sumObj!: Sum<T>;
  minusObj!: Minus<T>;
  multiplyObj!: Multiply<T>;
  divideObj!: Divide<T>;
  constructor() {
    this.sumObj = new Sum();
    this.minusObj = new Minus();
    this.multiplyObj = new Multiply();
    this.divideObj = new Divide();
  }
  sum(a: T, b: T): T {
    return this.sumObj.sum(a, b);
  }
  minus(a: T, b: T): T {
    return this.minusObj.minus(a, b);
  }
  multiply(a: T, b: T): T {
    return this.multiplyObj.multiply(a, b);
  }
  divide(a: T, b: T) {
    return this.divideObj.divide(a, b);
  }
}
// calculator 就是我们的门面，负责跟客户端交互。会在内部按需调用子系统或者说子模块
let calculator = new Calculator<number>();
console.log(calculator.sum(3, 2));
calculator.minus(3, 1);
calculator.multiply(1, 4);
calculator.divide(5, 5);
export {};
