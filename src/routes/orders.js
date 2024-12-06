import express from 'express';
import { OrderController } from '../controllers/orderController.js';

export const router = express.Router();
const orderController = new OrderController();

router.get('/:orderId', orderController.getOrderDetails);