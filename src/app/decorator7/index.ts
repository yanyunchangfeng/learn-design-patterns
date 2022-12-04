/**
 * 装饰器模式
 */
// .在不改变其原有的结构和功能为对象添加新功能的模式其实就叫做装饰器模式
// .最直观的就是我们买房后的装修
// .装饰比继承更加灵活，可以实现装饰者和被装饰者之间松偶合
// .被装饰者可以使用装饰者动态地增加和撤销功能

// 7.3.1 装饰器
// .装饰器是一种特殊类型的声明，它能够被附加到类声明、方法、属性或参数上，可以修改类的行为
// .常见的装饰器有类装饰器、属性装饰器、方法装饰器和参数装饰器
// .装饰器的写法分为普通装饰器和装饰器工厂
// 7.3.1.1类装饰器
// . 类装饰器在类声明之前声明，用来监控、修改或替换类定义
// . 参数是类的定义或者说构造函数

// 7.3.1.2属性装饰器
// .属性装饰器表示式会在运行时当做函数被调用
// .属性分为实例属性和类属性
// .方法分为实例方法和类方法

// 7.3.2 AOP概念
// .在软件业，AOP Aspect Oriented Programming 的缩写，意为面向切面编程
// .可以通过预编译方式和运行期动态代理实现在不修改源代码的情况下给程序动态统一添加功能的一种技术

// 7.3.3 埋点
// .埋点分析：是网站分析的一种常用的数据采集方法
// .无痕埋点：通过技术手段，完成对用户行为数据无差别的统计上传的工作，后期数据分析处理的时候通过技术手段筛选出合适的数据进行统计分析

abstract class Shape {
  abstract draw(): void;
}

class Circle extends Shape {
  draw(): void {
    console.log("绘制圆形");
  }
}
class Rectangle extends Shape {
  draw(): void {
    console.log("绘制矩形");
  }
}
class Star extends Shape {
  draw(): void {
    console.log("绘制五角星");
  }
}

// 装饰器模式 ———— 只是装饰 不会改变原有定义
abstract class ColorfulShape extends Shape {
  constructor(public shape: Shape) {
    super();
  }
  abstract draw(): void;
}
class RedColorfulShape extends ColorfulShape {
  draw(): void {
    this.shape.draw();
    console.log("把边框涂成红色");
  }
}
class GreenColorfulShape extends ColorfulShape {
  draw(): void {
    this.shape.draw();
    console.log("把边框涂成绿色");
  }
}
class YellowColorfulShape extends ColorfulShape {
  draw(): void {
    this.shape.draw();
    console.log("把边框涂成黄色");
  }
}
// 画一个红色的圆形
let redColorfulShape = new RedColorfulShape(new Circle());
redColorfulShape.draw();

let greenColorfulShape = new GreenColorfulShape(new Rectangle());
greenColorfulShape.draw();

let yellowColorfulShape = new YellowColorfulShape(new Star());
yellowColorfulShape.draw();
