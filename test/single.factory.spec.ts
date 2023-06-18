import { createInstance } from "src/app/single5/5";
function A() {}
function B() {}
function C() {}

describe.each([[A], [B], [C]])("test CreateInstance %o", (Class: any) => {
  test("return one instance", () => {
    let createClass = createInstance(Class);
    let c1 = new (createClass as any)();
    let c2 = new (createClass as any)();
    expect(c1 === c2).toEqual(true);
  });
});
