/**
 * 分别是关联(聚合和组合)、泛化和依赖
 * 关联
 */

export {};

class Category {
  // 也是关联 双向关联，互相关联
  public products!: Array<Product>;
}
class Product {
  // 产品类有一个实例属性是分类，那么就认为产品关联了分类
  // 单向关联和双向关联
  public category!: Category;
}

class Class {
  public students!: Array<Student>; //聚合 学生聚合在一起形成班级
}
class Book {}
class Pen {}
class Student {
  // 如果说另外一个类是当前类的方法和属性或者说是局部变量就是依赖关系
  read(book: Book) {
    let pen = new Pen();
  }
}

class Heart {}
class Person {
  public heart!: Heart; // 组合,生命周期是一致的
}
// 从弱到强 依赖>关联>聚合>组合

// 尽量使用组合或者 聚合，而不是使用继承

class Cooker {
  cook() {}
}
// class Person2 extends Cooker {}
// 继承耦合性太强
class Person2 {
  private cooker!: Cooker;
  cook() {
    this.cooker.cook();
  }
}
