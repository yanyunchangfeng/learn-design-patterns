import { Window } from "src/app/single5/3";
describe.each([[new (Window as any)(), new (Window as any)()]])(
  `test single Instance %o  equal %o`,
  (ins1, ins2) => {
    test("return one instance ", () => {
      expect(ins1 === ins2).toEqual(true);
    });
  }
);
