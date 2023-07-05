// 1.2继承
// 继承主要的要处是实现代码复用
// 继承可以把父类和子类的公共方法抽离出来，提高复用，减少冗余
// 是一种 is-a 关系
// 过度使用继承或者继承层次过深会导致代码可读性、可维护性变差 子类和父类高度耦合，修改父类的代码，会直接影响到子类

// 继承主要是实现代码逻辑的复用，或者说是属性和方法的复用
// 继承也会导致类的层次过深，类和类之间出现了偶尔，如果修改父类，子类也会跟着变
class Animal {
  name!: string;
  age!: number;
  eat() {
    console.log('吃东西');
  }
}

let animal = new Animal();
animal.eat();

class Dog extends Animal {}
let dog = new Dog();
dog.name;
dog.eat();
export {};
