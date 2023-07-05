// 1.3 封装
//. 把数据封装起来
// 减少耦合，不该外部访问的不要让外部访问
// 利于数据的接口权限管理
// 仅暴露有限的必要接口，提高类的易用性
// 实现
//  public 公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符
//  protected 受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为
//  private:私有修饰符，只可以在类内使用private修饰的属性和行为

/***
 * 封装 可以把类的内部属性隐藏起来
 * 1. 可以提供类易用性
 * 2. 可以保护类的隐私
 */

class Animal {
  // public 指的是公有属性，此属性可以在本类中，子类中和其它类中访问

  public name!: string;
  //protected 受保护的属性，此属性可以在本类中和子类中访问，其它类不让
  protected age!: number;
  // private 受保护的，被保护在类的内部可以访问，子类和其它类都无法访问
  private weight!: number;
  constructor(name: string, age: number, weight: number) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }
}
class Person extends Animal {
  private balance: number;
  constructor(name: string, age: number, weight: number, balance: number) {
    super(name, age, weight);
    this.balance = balance;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age; // 子类可以访问
  }
  getWeight() {
    //Property 'weight' is private and only accessible within class 'Animal'
    // return this.weight
  }
}

let p1 = new Person('cf', 29, 100, 1000);
p1.name;
// p1.age; // 子类可以访问 外边不让访问
// p1.weight; // 子类不能访问 外边不能访问
export {};
