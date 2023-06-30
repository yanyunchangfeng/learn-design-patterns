/**
 * 封装变化
 */

export { createInstance };
interface Window {
  hello: any;
}
function Window() {}
Window.prototype.hello = function () {
  console.log("hello");
};
// 希望 封装变化，希望这个createInstance 可以创建任何类型的实例
let createInstance = function <T extends new () => T>(Constructor: T) {
  let instance: any;
  return function AnyConstructor(this: any, ...args: []) {
    if (!instance) {
      // 正常来说 this.__proto = AnyConstructor.prototype
      Constructor.apply(this, args);
      // this.__proto = Constructor.prototype
      Object.setPrototypeOf(this, Constructor.prototype);
      instance = this;
    }
    return instance;
  };
};
let createWindow = createInstance(Window as any);
let w1 = new (createWindow as any)();
let w2 = new (createWindow as any)();
// console.log(w1 === w2);
