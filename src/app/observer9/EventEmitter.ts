// let EventEmitter = require('events')

interface IEventEmitter {
  _events: Record<string | number, any>;
  on(type: string, listener: Function): void;
  emit(type: string, ...arg: Function[]): void;
}
class EventEmitter implements IEventEmitter {
  _events = {} as Record<string | number, any>;
  on(type: string, listener: Function) {
    let listeners = this._events[type];
    if (listeners) {
      listeners.push(listener);
    } else {
      this._events[type] = [listener];
    }
  }
  emit(type: string, ...arg: any[]) {
    let listeners = this._events[type] || [];
    listeners.forEach((listener: Function) => listener(...arg));
  }
}

let subject = new EventEmitter();
subject.on('click', (name: string, age: number) => {
  console.log(1, name, age);
});
subject.on('click', (name: string, age: number) => {
  console.log(2, name, age);
});
subject.emit('click', 'yanyunchangfeng', 29);

export {};
