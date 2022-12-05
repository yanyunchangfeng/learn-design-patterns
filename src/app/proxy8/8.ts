let wang = {
  name: "王同学",
  age: 22,
  height: 160,
};

let wangMama = new Proxy(wang, {
  get(target: Record<string, any>, key: string) {
    if (key === "age") {
      return wang.age - 5;
    } else if (key === "height") {
      return wang.height + 5;
    }
    return target[key];
  },
  set(target, key, value) {
    if (key === "boyfriend") {
      if (value.age > 40) {
        throw new Error("太老了，不行");
      } else if (value.salary < 20000) {
        throw new Error("挣的太少，养不起我");
      } else {
        target[key] = value;
        return true;
      }
    }
    return true;
  },
});
console.log(wangMama.age);
wangMama.boyfriend = {
  age: 40,
  salary: 20000,
  xxx: "dddde",
};
console.log(wang);
