/**
 * 抽象工厂模式
 */

abstract class AmericanCoffee {}
abstract class LatteCoffee {}
abstract class CappuccinoCoffee {}

class StarBuckAmericanCoffee extends AmericanCoffee {}
class LuckinAmericanCoffee extends AmericanCoffee {}
class StarBuckLatteCoffee extends LatteCoffee {}
class LuckinLatteCoffeee extends LatteCoffee {}
class StarBuckCappuccinoCoffee extends CappuccinoCoffee {}
class LuckinCappuccinoCoffee extends CappuccinoCoffee {}

// 抽象工厂，抽象工厂里面需要三个方法
abstract class CafeFactory {
  abstract createAmericanCoffee(): AmericanCoffee;
  abstract createLatteCoffee(): LatteCoffee;
  abstract createCappuccinoCoffee(): CappuccinoCoffee;
}

class StarBuckCafeFactory extends CafeFactory {
  createAmericanCoffee(): AmericanCoffee {
    return new StarBuckAmericanCoffee();
  }
  createLatteCoffee(): LatteCoffee {
    throw new StarBuckLatteCoffee();
  }
  createCappuccinoCoffee(): CappuccinoCoffee {
    throw new StarBuckCappuccinoCoffee();
  }
}
class LuckinCafeFactory extends CafeFactory {
  createAmericanCoffee(): AmericanCoffee {
    return new LuckinAmericanCoffee();
  }
  createLatteCoffee(): LatteCoffee {
    return new LuckinLatteCoffeee();
  }
  createCappuccinoCoffee(): CappuccinoCoffee {
    return new LuckinCappuccinoCoffee();
  }
}
let luckinCafeFactory = new LuckinCafeFactory();
console.log(luckinCafeFactory.createAmericanCoffee()); // 创建瑞幸的美式咖啡
export {};
