abstract class Coffee {
  constructor(public name: string) {}
}
class AmericanCoffee extends Coffee {}
class LatteCoffee extends Coffee {}
class CappuccinoCoffee extends Coffee {}
class FlowerCoffee extends Coffee {}
class CafeFactory {
  static order(name: string) {
    switch (name) {
      case "AmericanCoffee":
        return new AmericanCoffee("美式咖啡");

      case "LatteCoffee":
        return new LatteCoffee("拿铁咖啡");

      case "CappuccinoCoffee":
        return new CappuccinoCoffee("卡布奇诺咖啡");
      case "FlowerCoffee":
        return new FlowerCoffee("花式咖啡");

      default:
        throw new Error("你点的咖啡品种我们不支持");
    }
  }
}
console.log(CafeFactory.order("AmericanCoffee"));
console.log(CafeFactory.order("LatteCoffee"));
console.log(CafeFactory.order("CappuccinoCoffee"));
console.log(CafeFactory.order("FlowerCoffee"));
export {};
