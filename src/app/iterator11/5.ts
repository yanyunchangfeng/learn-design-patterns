class Tree {
  constructor(public left: any, public value: any, public right: any) {}
}
function make(array: any[]): any {
  if (array.length == 1) return new Tree(null, array[0], null);
  return new Tree(make(array[0]), array[1], make(array[2]));
}
let tree = make([[["D"], "B", ["E"]], "A", [["F"], "C", ["G"]]]);
console.log(tree);
// 根 左 右
function* leftOrder(tree: any): any {
  if (tree) {
    yield tree.value;
    yield* leftOrder(tree.left);
    yield* leftOrder(tree.right);
  }
}
// 左 根 右
function* inOrder(tree: any): any {
  if (tree) {
    yield* inOrder(tree.left);
    yield tree.value;
    yield* inOrder(tree.right);
  }
}
// 左 右 根
function* rightOrder(tree: any): any {
  if (tree) {
    yield* rightOrder(tree.left);
    yield* rightOrder(tree.right);
    yield tree.value;
  }
}
let resultLeft: string[] = [];
let resultIn: string[] = [];
let resultRight: string[] = [];
for (let node of leftOrder(tree)) {
  resultLeft.push(node);
}
for (let node of inOrder(tree)) {
  resultIn.push(node);
}
for (let node of rightOrder(tree)) {
  resultRight.push(node);
}
console.log(resultLeft);
console.log(resultIn);
console.log(resultRight);
