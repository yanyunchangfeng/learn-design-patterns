// 有Id情况下
function list_to_tree(list: any) {
  // 思路
  // . 先遍历list 以当前元素的id为key 当前索引为值 存储在map中，初始化当前元素的children为空数组
  // . 再次遍历list 如果当前元素的parentId不等于0 在list中找到map以当前元素的parentId为key的值作为父节点，将当前节点存入到父节点的子节点中
  var map: any = {},
    node,
    roots = [],
    i;

  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i; // initialize the map
    list[i].children = []; // initialize the children
  }

  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parentId !== "0") {
      // if you have dangling branches check that map[node.parentId] exists
      list[map[node.parentId]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}

var entries = [
  {
    id: "12",
    parentId: "0",
    text: "Man",
    level: "1",
    children: null,
  },
  {
    id: "6",
    parentId: "12",
    text: "Boy",
    level: "2",
    children: null,
  },
  {
    id: "7",
    parentId: "12",
    text: "Other",
    level: "2",
    children: null,
  },
  {
    id: "9",
    parentId: "0",
    text: "Woman",
    level: "1",
    children: null,
  },
  {
    id: "11",
    parentId: "9",
    text: "Girl",
    level: "2",
    children: null,
  },
];

const arrayToTree = (arr: any, parentId?: any) => {
  // 思路
  // . 找到同一级节点
  // . 将这些同一级的节点添加到他们所属的父节点的children
  return arr
    .filter(
      (e: any) =>
        parentId == undefined ? e.parentId == "0" : e.parentId == parentId // 先找到parentId为0的节点，作为一级节点
    )
    .map((item: any) => {
      item.children = arrayToTree(arr, item.id); // 然后找这些一级节点的children，继续用arrToTree把当前的节点id作为parentId,找到自己的孩子节点,然后就继续递归找下级节点
      return item;
    });
};

// console.log(list_to_tree(entries));
// console.log(arrayToTree(entries));

//无id情况

let list = [
  {
    college: "梦想的学院",
    grade: "一年级",
    clazz: "1班",
  },
  {
    college: "嗷嗷叫学院",
    grade: "二年级",
    clazz: "1班",
    id: "xxx",
  },
  {
    college: "嗷嗷叫学院",
    grade: "一年级",
    clazz: "1班",
    id: "biubiubiu",
  },
  {
    college: "慢羊羊村大学",
    grade: "一年级",
    clazz: "1班",
  },
  {
    college: "梦想的学院",
    grade: "二年级",
    clazz: "1班",
  },
  {
    college: "慢羊羊村大学",
    grade: "一年级",
    clazz: "1班",
  },
];

const userList = [
  {
    name: "user1",
    age: 18,
    province: "四川",
    city: "成都",
    district: "高新区",
  },
  {
    name: "user2",
    age: 19,
    province: "四川",
    city: "成都",
    district: "天府新区",
  },
  {
    name: "user3",
    age: 20,
    province: "四川",
    city: "南充",
    district: "顺庆区",
  },
  {
    name: "user4",
    age: 22,
    province: "江苏",
    city: "南京",
    district: "鼓楼区",
  },
  {
    name: "users",
    age: 21,
    province: "江苏",
    city: "南京",
    district: "玄武区",
  },
  {
    name: "user6",
    age: 21,
    province: "江苏",
    city: "镇江",
    district: "京口区",
  },
];
const data2Tree = <T, U>(list: T[], condition: U[] = []) => {
  const newArr: any[] = [];
  condition = JSON.parse(JSON.stringify(condition));
  let order = condition.shift();
  let holdArr: any[] = [];
  const deep = condition.length;
  list.forEach((item: any) => {
    const holdIndex = holdArr.indexOf(item[order]);
    if (holdIndex > -1) {
      newArr[holdIndex]["children"].push(item);
    } else {
      holdArr.push(item[order]);
      newArr.push({
        title: item[order],
        children: new Array(item),
      });
    }
  });
  newArr.forEach((item) => {
    if (item.children.length && deep) {
      let children = data2Tree(item.children, condition);
      item.children = children;
    }
  });
  return newArr;
};
const listCondition = ["college", "grade", "clazz"];
const userListCondition = ["province", "city", "district"];
const treeData = data2Tree(list, listCondition);
const provinceData = data2Tree(userList, userListCondition);
// console.log(treeData, "treeData");
// console.log(provinceData, "provinceData");

export { data2Tree, userList, list, listCondition, userListCondition };
