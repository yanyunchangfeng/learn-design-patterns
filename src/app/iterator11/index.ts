/**
 * 迭代器模式
 */
//. 迭代器模式（Iterator Pattern） 用于顺序地访问聚合对象内部的元素，又无需知道对象内部结构。使用了迭代器之后，使用者不需要关心
// 对象的内部构造，就可以按序访问其中的每个元素

// 11.3.3 Iterator

// .在ES6中有序集合数据类型有Array 、Map、Set、String、TypedArray、arguments、NodeLIst
// .我们需要有一个统一的遍历接口来遍历所有的数据类型
// .他们都有[Symbol.Iterator]属性，属性是一个函数，执行函数会返回迭代器
// .迭代器就有next放放顺序返回子元素

// 11.3.5 二叉树遍历
// .二叉树是每个节点最多有两个子树的树结构，通常子树被称作左子树和右子树
// .根据节点的顺序可以把遍历分为三种前序、中序、后序
// . 先序遍历：根节点-> 左子树->右子树
// . 中序遍历：左子树-> 根节点-> 右子树
// . 后序遍历：左子树-> 右子树->根节点

function createIterator(array: any[]) {
  let index: number = 0;
  return {
    next() {
      return index < array.length
        ? { value: array[index++], done: false }
        : { value: undefined, done: true };
    },
  };
}
let array = [1, 2, 3];
let it = createIterator(array);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

export {};
