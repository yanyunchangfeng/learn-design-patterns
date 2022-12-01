/**
 * 迪米特法则
 */
class SaleMan {
  constructor(public name: string) {}
  sale() {
    console.log(this.name + "销售中...");
  }
}
class SaleManager {
  private salesman: Array<SaleMan> = [new SaleMan("张三"), new SaleMan("李四")];
  sale() {
    this.salesman.forEach((salesman) => salesman.sale());
  }
}
class CEO {
  private saleManager: SaleManager = new SaleManager();
  sale() {
    this.saleManager.sale();
  }
}
let ceo = new CEO();
ceo.sale();
