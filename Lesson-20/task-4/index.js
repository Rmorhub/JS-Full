// 'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */

class Order {
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
    this.id = Math.ceil(Math.random() * 100).toFixed();
    this.dateCreated = new Date();
    this.isConfirmed = false;
  }

  checkPrice() {
    if (this.price > 1000) {
      return true;
    }
    return false;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }
    return false;
  }
}

const firstOrder = new Order(1200, 'Kherson', 'Buy');
console.log(firstOrder);
console.log(firstOrder.checkPrice());
firstOrder.confirmOrder();
console.log(firstOrder);
console.log(firstOrder.isValidType());

const secondOrder = new Order(1200, 'Lviv', 'Buy');
console.log(secondOrder);
console.log(secondOrder.checkPrice());
secondOrder.confirmOrder();
console.log(secondOrder);
console.log(secondOrder.isValidType());
secondOrder.confirmOrder();
console.log(secondOrder);

const thirdOrder = new Order(990, 'Kharkov', 'Buy');
console.log(thirdOrder);
console.log(thirdOrder.checkPrice());
thirdOrder.confirmOrder();
console.log(thirdOrder);
console.log(thirdOrder.isValidType());
thirdOrder.confirmOrder();
console.log(thirdOrder);
