/**
 * 工厂方法
 * 就是把创建产品的工作交由具体工厂类来实现
 */

abstract class Coffee {
  constructor(public name: string) {}
}
class AmericanCoffee extends Coffee {}
class LatteCoffee extends Coffee {}
class CappuccinoCoffee extends Coffee {}

abstract class CateFactory {
  abstract createCoffee(): Coffee;
}

class AmericanCoffeeFactory extends CateFactory {
  createCoffee(): Coffee {
    return new AmericanCoffee("美式咖啡");
  }
}
class LatteCoffeeFactory extends CateFactory {
  createCoffee(): Coffee {
    return new LatteCoffee("拿铁咖啡");
  }
}
class CappuccinoCoffeeFactory extends CateFactory {
  createCoffee(): Coffee {
    return new CappuccinoCoffee("卡布其诺咖啡");
  }
}
// 原来在简单工厂里，是由Factory来创建产品的
// 在工厂方法里，不再由Factory 来创建产品，而是先创建具体的工厂，然后具体的工厂来创建产品
class Factory {
  static order(name: string) {
    switch (name) {
      case "AmericanCoffee":
        return new AmericanCoffeeFactory().createCoffee();

      case "LatteCoffee":
        return new LatteCoffeeFactory().createCoffee();

      case "CappuccinoCoffee":
        return new CappuccinoCoffeeFactory().createCoffee();

      default:
        throw new Error("你点的咖啡品种我们不支持");
    }
  }
}
console.log(Factory.order("AmericanCoffee"));

function createElement(type: any, config: any) {
  // this 绑定为null 第一个参数绑定type
  return { type, props: config };
}
function createFactory(type: string) {
  const factory = createElement.bind(null, type);
  return factory;
}
let factory = createFactory("h1");
let element = factory({ id: "h1", className: "title" });
console.log(element);

export {};
