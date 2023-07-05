/**
 * 或者接收两个数字，或者接收两个字符串
 * @param a
 * @param b
 */
function sum(a: string, b: string): void;
function sum(a: number, b: number): void;
function sum(a: string | number, b: string | number) {
  if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  }
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
}

// 函数重载
// . 为复杂的模块或子系统提供外界访问的模块
// . 子系统相互独立

export {};
