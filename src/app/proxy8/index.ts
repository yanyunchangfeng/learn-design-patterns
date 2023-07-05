// 8.代理模式
//. 由于一个对象不能直接引用另一个对象，所以需要通过代理对象在这两个对象之间起到中介作用
//. 代理模式就是为目标对象创造一个代理对象，已实现对目标对象的访问
//. 这样就可以在代理对象里增加一些逻辑判断，调用前或调用后执行一些操作，从而实现了扩展目标的功能
//. 火车票代购、房产中介、律师、海外代购、明星经纪人

//8.1类图
//.Target 目标对象、也就是被代理的对象，是具体业务的执行者
//.Proxy代理对象，里面会包含一个目标对象的引用，可以实现对访问的扩展和额外处理

// 8.3.1事件委托代理
//. 事件捕获指的是从document到触发事件的那个节点，即自上而下的去触发事件
//. 事件冒泡是自下而上的去触发事件
//. 绑定事件方法的第三个参数，就是控制事件触发顺序是否为事件捕获；false为事件冒泡，默认false

// 8.3.4缓存代理
// .有些时候可以用空间换时间
// .一个正整数的阶乘（factorial）是所有小于及等于该数的正整数的积，并且0的阶乘为1

//8.3.5防抖代理
// .通过防抖代理优化可以把多次请求合并为一次，提高性能
// .节流与防抖都是为了减少频繁触发事件回调
// .节流是在某段时间内不管触发了多少次回调都只认第一个，并在第一次结束后执行回调
// .防抖就是在某段时间不管触发了多少回调都只看最后一个

// 8.3.8 Proxy
// .Proxy 用于修改某些操作的默认行为
// .Proxy 可以理解成，在目标对象之前架设一层 拦截，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写
// .Proxy 这个词的原意是代理，用在这里表示由它来代理某些操作，可以译为代理器

//8.3.10
//.代理模式 VS 适配器模式 适配器提供不同接口，代理模式提供一模一样的接口
//.代理模式 VS 装饰器模式 装饰器模式原来的功能不变还可以使用，代理模式改变原来的功能

export {};
// abstract class Star {
//   abstract answerPhone(): void;
// }
interface Star {
  answerPhone(): void;
}
class Angelababy implements Star {
  available: boolean = false;
  answerPhone(): void {
    console.log('你好，我是Angelababy');
  }
}
class AngelababyAgent implements Star {
  angelababy: Angelababy;
  //让经纪人保持一个对angelababy引用
  constructor() {
    this.angelababy = new Angelababy();
  }
  answerPhone(): void {
    console.log('你好，我是Angelababy的经纪人');
    if (this.angelababy.available) {
      this.angelababy.answerPhone();
    } else {
      console.log('很抱歉，Angelababy没有空！');
    }
  }
}
let angelababyAgent = new AngelababyAgent();
angelababyAgent.answerPhone();
