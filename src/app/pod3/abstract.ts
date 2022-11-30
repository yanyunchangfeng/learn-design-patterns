// 1. 什么是面向对象
// . 以类和对象作为组织代码的基本单位，并实现封装、抽象、继承、多态四个特性
// . 软件开发经历分析、设计和编码三个阶段
//        面向对象分析(OOA) Object Oriented Analysis
//        面向对象设计(OOD) Object Oriented Design
//        面向对象编程(OOP) Object Oriented Programming

// 1.1 抽象
//    抽象主要是隐藏方法的实现，让调用者只关心有哪些功能而不是关心功能的实现
//    抽象可以提高代码的可扩展性和维护性，修改实现不需要改变定义，可以减少代码的改动范围

/**
 * 面向对象的四个特性
 * 抽象
 */
interface IStorage {
  save(key: string, value: any): void;
  read(key: string): any;
}
class UserInfo {
  // 参数中加了public 意味着这个属性会成为当前类的一个实例属性
  //   constructor(public name: string){}
  public name: string;
  // 依赖的storage是抽象 而非实现
  constructor(name: string, public storage: IStorage) {
    this.name = name;
  }
  save() {
    this.storage.save("cf", JSON.stringify(this));
  }
  read() {
    return this.storage.read("cf");
  }
}
class LocalStorage implements IStorage {
  save(key: string, value: any): void {
    throw new Error("Method not implemented.");
  }
  read(key: string) {
    throw new Error("Method not implemented.");
  }
}
let local = new LocalStorage();

class MysqlStorage implements IStorage {
  save(key: string, value: any): void {
    // mysql.setItem(key,value)
  }
  read(key: string) {
    // return mysql.getItem(key)
  }
}
let mysqlStorage = new MysqlStorage();
let userInfo = new UserInfo("cf", local);
let userInfo2 = new UserInfo("cf", mysqlStorage);
console.log(userInfo.name);

export {};
