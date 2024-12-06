import express from 'express';
import { WarrantyController } from '../controllers/warrantyController.js';

export const router = express.Router();
const warrantyController = new WarrantyController();

router.get('/', warrantyController.checkWarranty);