/**
 *
 * ES6 iterator
 *
 */
interface Array<T> {
  [key: number]: any;
}
(Array.prototype as any)[Symbol.iterator] = function () {
  let index = 0;
  let that = this as any;
  return {
    next() {
      return index < that.length ? { value: that[index], done: false } : { value: undefined, done: true };
    }
  };
};
let arr2 = [1, 2, 3];
let it2 = arr2[Symbol.iterator]();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

//Map Set String arguments NodeList

let str = 'abc';
let it3 = str[Symbol.iterator]();
console.log(it3.next());
console.log(it3.next());
console.log(it3.next());
console.log(it3.next());

export {};
