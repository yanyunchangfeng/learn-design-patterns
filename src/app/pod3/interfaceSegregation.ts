/**
 * 接口隔离原则
 */

interface Running {
  run(): void;
}
interface Flying {
  fly(): void;
}
interface Swimming {
  swim(): void;
}
interface AutomobileInterface {
  run(): void;
  fly(): void;
  swim(): void;
}
// 1.为了复用 2. 为了低耦合 3.为了单一职责
class Automobile implements Running, Flying, Swimming {
  run(): void {}
  fly(): void {}
  swim(): void {}
}
/*
class Automobile implements AutomobileInterface {
  run(): void {}
  fly(): void {}
  swim(): void {}
}
*/

class Car implements Running {
  run(): void {}
}
