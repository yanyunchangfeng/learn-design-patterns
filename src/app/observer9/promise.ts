/**
 * Promise
 */

export {};
type Fn = (...args: any) => void;
class Promise {
  success: Array<Fn> = [];
  constructor(task: Fn) {
    const resolve = () => {
      this.success.forEach((success) => success());
    };
    task(resolve);
  }
  then(success: Fn) {
    this.success.push(success);
  }
}
let promise = new Promise((resolve: Fn) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});
promise.then(() => console.log(1));
promise.then(() => console.log(2));

export {};
