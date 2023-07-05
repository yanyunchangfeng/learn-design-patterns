/**
 * 开放封闭原则 对修改关闭，对扩展开放
 */

class Customer {
  constructor(public rank: string) {}
}
class Product {
  constructor(public name: string, public price: number) {}
  cost(customer: Customer) {
    switch (customer.rank) {
      case 'member':
        return this.price * 0.8;

      case 'vip':
        return this.price * 0.6;

      case 'superVip':
        return this.price * 0.4;

      default:
        return this.price;
    }
  }
}

let product = new Product('笔记本电脑', 1000);
let member = new Customer('member');
let vip = new Customer('vip');
let superVip = new Customer('superVip');
let guest = new Customer('guest');
console.log(product.cost(member));
console.log(product.cost(vip));
console.log(product.cost(guest));
console.log(product.cost(superVip));

export {};
