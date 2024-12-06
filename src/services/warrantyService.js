import { warrantyData } from '../data/warrantyData.js';

export class WarrantyService {
  constructor() {
    this.warranties = warrantyData;
  }

  getWarrantyStatus(email) {
    const warranty = this.warranties.find(w => w.email.toLowerCase() === email.toLowerCase());
    
    if (!warranty) {
      return {
        found: false,
        message: 'No warranty found for this email'
      };
    }

    const purchaseDate = new Date(warranty.purchaseDate);
    const warrantyEnd = new Date(purchaseDate);
    warrantyEnd.setMonth(warrantyEnd.getMonth() + warranty.warrantyLength);
    const today = new Date();

    return {
      found: true,
      status: today <= warrantyEnd ? 'active' : 'expired',
      purchaseDate: warranty.purchaseDate,
      warrantyLength: warranty.warrantyLength,
      expirationDate: warrantyEnd.toISOString().split('T')[0],
      remainingDays: today <= warrantyEnd ? 
        Math.ceil((warrantyEnd - today) / (1000 * 60 * 60 * 24)) : 
        0
    };
  }
}