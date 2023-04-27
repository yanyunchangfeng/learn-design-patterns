/**
 *  public 自己 自己的子类 其它都可以访问
 */
// 类图（Class Diagram） 描述类的静态结构，定义类及描述类之间的联席，如关联、依赖、聚合等，还包括类的内部结构（类的属性和操作）
// 类图是一种静态模型类型，一个类图根据系统中的类以及各个类之间的关系描述系统的静态结构
// 类图包含7个元素：
//    .类(Class)
//    .接口（interface）
//    .协作（Collaboration）
//    .依赖关系(Dependency)
//    .泛化关系(Generalization)
//    .关联关系(Association)
//    .实现关系(Realization)
// 在UML中，类用矩形来表示，分为三个部分：名称部分(Name)、属性部分(Attribute)和操作部分(Operation)

// 类的表示
// 类型      |   示例
// 属性格式   |   name:attribute = default value
// 操作格式   |   name(parameter list) = type of value returned

// 类图的关系
// 1.依赖关系  只要在类中用到了对方，那么它们之间就存在依赖关系， 如果没有对方， 连编译都通过不了
// 2.泛化关系  泛化关系实际上就是继承关系，他就是依赖关系的特例
// 3.实现关系  实现关系实际上就是A类实现B类，他就是依赖关系的特例
// 4.关联关系
//    关联关系实际上就是类与类之间的联系，他是依赖关系的特例
//    关联关系比依赖的关系更强
//    关联具有导航性，即双向关系或者单向关系 ，表示关系在那一方维护
//    关联具有多重性 如
//       1 表示有且仅有一个
//       0 表示0或者多个
//       0，1 表示0或者一个
//       n，m 表示n到m个都可以
//       m 表示至少m个
// 5.聚合关系
//     聚合关系表示的是整体和部分的关系，整体与部分可以分开
//     聚合关系是关联关系的特例，所有它具有的关联的导向性和多重性
//     聚合的双方生命周期是独立的
// 6.组合关系
//      也是整体和部分的关系，但是整体和部分不可分开
//      整体和部分生命周期一致

class Water {}
class Animal {
  public name!: string;
  public age!: number;
  // 类的依赖关系在代码中的表示是属性关系，这就是依赖关系
  public water!: Water;
  public eat() {}
  public drink() {}
}
/**
 * 接口是行为的抽象
 */
interface Eggs {
  giveEggs(): void;
}
class Bird extends Animal implements Eggs {
  public swing!: number;
  public fly() {}
  public giveEggs(): void {}
}
class TangFather {}
class TangFriend {}
class TangChild {}
class TangWife {}
class TangHouse {}

class TangDuck extends Bird {
  public father!: TangFather;
  public friends!: Array<TangFriend>;
  public wife!: TangWife;
  public children!: Array<TangChild>;
  public house!: Array<TangHouse>;
}
class BigBirdKidney {}
class BigBird extends Bird {
  public kidney!: Array<BigBirdKidney>;
}
class BigBirdGroup {
  public birds!: Array<BigBird>;
}
