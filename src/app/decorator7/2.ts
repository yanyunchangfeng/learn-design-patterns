namespace a {
  interface Animal {
    swings: number;
    fly: Function;
  }
  //如果说装饰器函数是用来修饰类的话，那么target就是类的构造函数本身
  function flyable(swings: number) {
    return function flyable(target: typeof Animal) {
      console.log(target);
      target.prototype.swings = swings;
      target.prototype.fly = function () {
        console.log('我能飞');
      };
    };
  }
  //   function flyable(target: typeof Animal) {
  //     console.log(target);
  //     target.prototype.swings = 2; // 动态添加 ts不能识别
  //     target.prototype.fly = function () {
  //       console.log("我能飞");
  //     };
  //   }
  @flyable(2)
  class Animal {
    constructor() {}
  }
  let animal: Animal = new Animal();
  console.log(animal.swings);
  animal.fly();
}

namespace b {
  interface Person {
    protoName: string;
  }
  //实例属性的时候target是类的原型对象，key是属性的名字
  function instancePropertyDecorator(target: InstanceType<typeof Person>, key: string) {
    target.protoName = '我是类的原型上的属性';
    console.log('instancePropertyDecorator', target, key);
  }
  //类的静态属性的时候target就是类的构造函数
  function classPropertyDecorator(target: typeof Person, key: string) {
    console.log('classPropertyDecorator', target, key);
  }
  //如果是实例的方法的话target就是类的原型 key方法名 descriptor属性描述符
  function instanceMethodDecorator(target: InstanceType<typeof Person>, key: string, descriptor: PropertyDescriptor) {
    console.log('instanceMethodDecorators', target, key, descriptor);
  }
  //如果是类的静态方法的话target就是类的构造函数， key方法名 descriptor属性描述符
  function classMethodDecorator(target: typeof Person, key: string, descriptor: PropertyDescriptor) {
    console.log('classMethodDecorator', target, key, descriptor);
  }
  class Person {
    @instancePropertyDecorator
    instanceProperty!: string; // 实例属性
    @classPropertyDecorator
    static classProperty: string; // 类的静态属性
    @instanceMethodDecorator
    instanceMethod() {
      // 实例的方法
    }
    @classMethodDecorator
    static classMethod() {
      //类的静态方法
    }
  }
}

namespace d {
  function readonly(target: InstanceType<typeof Circle>, key: string) {
    Object.defineProperty(target, key, {
      writable: false
    });
  }
  function deprecate(target: InstanceType<typeof Circle>, methodName: string, descriptor: PropertyDescriptor) {
    let oldValue = descriptor.value;
    descriptor.value = function (...arg: any[]) {
      let message = `DEPRECATION ${target.constructor.name}#${methodName}:This function will be removed in future version`;
      console.warn(message);
      return oldValue(...arg);
    };
  }

  class Circle {
    @readonly
    pi: number = 3.14;
    @deprecate
    getName() {
      console.log('getName');
    }
  }
  let circle = new Circle();
  console.log(circle.pi);
  circle.getName();
}
function before(beforeFn: Function) {
  return function (target: InstanceType<typeof App>, methodName: string, descriptor: PropertyDescriptor) {
    let oldMethod: Function = descriptor.value;
    descriptor.value = function () {
      beforeFn.apply(this, arguments);
      return oldMethod.apply(this, arguments);
    };
  };
}
function after(afterFn: Function) {
  return function (target: InstanceType<typeof App>, methodName: string, descriptor: PropertyDescriptor) {
    let oldMethod: Function = descriptor.value;
    descriptor.value = function () {
      let result = oldMethod.apply(this, arguments);
      afterFn.apply(this, arguments);
      return result;
    };
  };
}
class App {
  @before(() => console.log('before'))
  onClickBefore() {
    console.log('beforeClick');
  }
  @after(() => console.log('after'))
  onClickAfter() {
    console.log('beforeClick');
  }
  @after(() => fetch('/api/report'))
  ajaxClick() {
    console.log('ajaxClick');
  }
}
