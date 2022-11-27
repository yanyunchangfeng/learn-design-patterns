// props.children 可能是一个对象，也可能是一个数组
function createElement(
  type: string,
  config: Record<string, any>,
  children: any
) {
  let props = {} as Record<string, any>;
  let childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    let childArray = new Array(childrenLength);
    for (let i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  } else {
  }
}
