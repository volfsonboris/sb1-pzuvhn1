import { orderData } from '../data/orderData.js';

export class OrderService {
  constructor() {
    this.orders = orderData;
  }

  getOrderDetails(orderId) {
    return this.orders.find(order => order.orderNumber === orderId);
  }
}