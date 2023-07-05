/**
 * Jquery Callbacks
 */

type Observer = (...args: any[]) => void;

let a1 = () => console.log(1);
let a2 = () => console.log(2);
let a3 = () => console.log(3);

const Callbacks = () => {
  let observers: Observer[] = [];
  const add = <T extends Observer>(observer: T) => {
    observers.push(observer);
  };
  const remove = <T extends Observer>(observer: T) => {
    observers = observers.filter((item) => item !== observer);
  };
  const fire = () => {
    observers.forEach((observer) => observer());
  };
  return {
    add,
    remove,
    fire
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
