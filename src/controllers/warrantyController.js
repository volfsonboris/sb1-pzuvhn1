import { WarrantyService } from '../services/warrantyService.js';

export class WarrantyController {
  constructor() {
    this.warrantyService = new WarrantyService();
  }

  checkWarranty = (req, res) => {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ message: 'Email query parameter is required' });
    }

    const warrantyStatus = this.warrantyService.getWarrantyStatus(email);

    if (!warrantyStatus.found) {
      return res.status(404).json({ message: warrantyStatus.message });
    }

    res.json(warrantyStatus);
  };
}