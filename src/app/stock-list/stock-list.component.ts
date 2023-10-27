import { Component, OnInit } from '@angular/core';
import { StockService } from '../service/stock-service.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stocks: any[] = [];

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.stocks=this.stockService.getStocks();
  }
}