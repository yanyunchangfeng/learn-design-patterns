/**
 * 透明单例
 */
export {};
let Window = (function () {
  let window: Window;
  let Window = function (this: Window) {
    if (window) {
      return window;
    } else {
      // 如果说构造函数返回一个对象的话，那么new这个构造函数 就把这个对象返回了
      return (window = this);
    }
  };
  return Window;
})();
let w1 = new (Window as any)();
let w2 = new (Window as any)();
console.log(w1 === w2);
