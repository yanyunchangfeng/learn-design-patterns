/**
 * Jquery Callbacks
 */

interface ICallbackFn<T> {
  add(observer: T): void;
  remove(observer: T): void;
  fire(): void;
}
interface ICallBacks<T> {
  (): ICallbackFn<T>;
}
let a1 = () => console.log(1);
let a2 = () => console.log(2);
let a3 = () => console.log(3);
type Fn = typeof a1;

const Callbacks: ICallBacks<Fn> = () => {
  let observers: Fn[] = [];
  const add = (observer: Fn) => {
    observers.push(observer);
  };
  const remove = (observer: Fn) => {
    observers = observers.filter((item) => item !== observer);
  };
  const fire = () => {
    observers.forEach((observer) => observer());
  };
  return {
    add,
    remove,
    fire,
  };
};
// type returnType = ReturnType<typeof Callbacks>;
let callbacks = Callbacks();

callbacks.add(a1);
callbacks.add(a2);
callbacks.add(a3);
callbacks.remove(a3);
callbacks.fire();

export {};
