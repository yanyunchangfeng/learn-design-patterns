// array forEach
declare global {
  interface Array<T> {
    forEach2(callback: Function): void;
  }
}

Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback.call(this, this[i], i, this);
  }
};

export {};
