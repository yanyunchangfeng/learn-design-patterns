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
calculator.sum(3, 2);
calculator.minus(3, 1);
calculator.multiply(1, 4);
calculator.divide(5, 5);
export {};
