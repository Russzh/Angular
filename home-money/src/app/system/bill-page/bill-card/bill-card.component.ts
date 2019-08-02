import { Component, OnInit, Input } from '@angular/core';
import { Bill } from '../../shared2/models/bill.model';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.css']
})
export class BillCardComponent implements OnInit {

  @Input () bill: Bill;
  @Input () currency: any;

  dollar: number;
  rub:number;

  constructor() { }

  ngOnInit() {
    const { rates } = this.currency;
    this.dollar = rates['USD'] * this.bill.value;
    this.rub = rates['BYN'] * this.bill.value;
  }

}
