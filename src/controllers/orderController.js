import { OrderService } from '../services/orderService.js';

export class OrderController {
  constructor() {
    this.orderService = new OrderService();
  }

  getOrderDetails = (req, res) => {
    const { orderId } = req.params;

    try {
      const orderDetails = this.orderService.getOrderDetails(orderId);
      
      if (!orderDetails) {
        return res.status(404).json({ message: 'Order not found' });
      }

      res.json(orderDetails);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}