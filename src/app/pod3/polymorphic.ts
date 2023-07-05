//1.4
// 多态是指，子类可以替换父类
// 保持子类的开放性和灵活性，可以重写父类中的方法
// 实现面向接口编程

/**
 *  多态
 */
// class Animal {
//   speak() {
//     throw new Error("此方法必须由子类实现");
//   }
// }

abstract class Animal {
  abstract speak(): void;
}
class Dog extends Animal {
  speak() {
    console.log('汪汪汪');
  }
}
class Cat extends Animal {
  speak() {
    console.log('喵喵喵');
  }
}
function talk(animal: Animal) {
  animal.speak();
}
talk(new Dog());
talk(new Cat());
export {};
// 多态是一个功能，它的实现是要靠继承的，多态是要靠继承来实现，没有继承就没有多态
