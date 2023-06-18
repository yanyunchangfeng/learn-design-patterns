// array forEach
declare global {
  interface Array<T> {
    forEach2(callback: (current: T, index: number, arr: T[]) => void): void;
  }
}

Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

export {};
