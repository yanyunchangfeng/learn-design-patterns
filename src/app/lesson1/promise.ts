/**
 * Promise
 */

export {};
class Promise {
  success: Array<Function> = [];
  constructor(task: Function) {
    const resolve = () => {
      this.success.forEach((success) => success());
    };
    task(resolve);
  }
  then(success: Function) {
    this.success.push(success);
  }
}
let promise = new Promise((resolve: Function) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});
promise.then(() => console.log(1));
promise.then(() => console.log(2));

export {};
