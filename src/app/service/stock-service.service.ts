import { Injectable } from '@angular/core';
import { Stock } from '../model/stock.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private stocks: Stock[] = [
    { id: 1, symbol: 'AAPL', name: 'Apple Inc.', price: 150, volume: 1000, sector: 'Technology' },
    { id: 2, symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2800, volume: 500, sector: 'Technology' },
    { id: 3, symbol: 'AMZN', name: 'Amazon.com Inc.', price: 3300, volume: 700, sector: 'Retail' }
    
  ];
  constructor() {}

  getStocks(): Stock[] {
    return this.stocks
  }

  addStock(stock: any): void {
    this.stocks.push(stock);
  }

  updateStock(stock: any): void {
    const index = this.stocks.findIndex(s => s.id === stock.id);
    if (index !== -1) {
      this.stocks[index] = stock;
    }
  }

  deleteStock(id: number): void {
    const index = this.stocks.findIndex(s => s.id === id);
    if (index !== -1) {
      this.stocks.splice(index, 1);
    }
  }
}
