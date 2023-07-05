/**
 * 适配器模式
 *
 */
// 适配器模式又称包装器模式，将一个类的接口转化为用户需要的另一个接口，解决类（对象）之间接口不兼容的问题
// 旧的接口和使用者不兼容
// 中间加一个适配器转换接口

// 这是需要被适配的类
class Socket {
  output() {
    return '220v';
  }
}

abstract class Power {
  abstract charge(): string;
}

class PowerAdaptor extends Power {
  constructor(public socket: Socket) {
    super();
  }
  charge(): string {
    return this.socket.output() + '转换为24v';
  }
}

let adaptor = new PowerAdaptor(new Socket());
console.log(adaptor.charge());
