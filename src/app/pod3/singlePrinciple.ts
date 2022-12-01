/**
 * 单一职责
 * 一个类的功能要尽可能单一，不要太杂
 * 如果一个类的代码行数超过100，方法超过10个，或者里面有关联不是很大的东西
 */
export {};
// 拆的过细就有可能降低内聚性
class Product {
  public name!: string;
  public price!: number;
  public category!: Category;
  // public updateProduct(prodName,prodPrice){}
  public updateName() {}
  public updatePrice() {}
  public updateCategory() {}
  //public updateManger:Manager 不能再拆分了
}

class Category {
  public name!: string;
  public icon!: string;
}

// 拆的越细越好吗？
