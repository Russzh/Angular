import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillService } from '../shared2/services/bill.service';
import {  Subscription, combineLatest} from 'rxjs';
import { Bill } from '../shared2/models/bill.model';

@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.css']
})
export class BillPageComponent implements OnInit{

  subscription: Subscription;

  currency:any;
  bill: Bill; 

  isLoaded = false;

  constructor(private billService: BillService) { }

  ngOnInit() {
    combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency() 
    ).subscribe((data:[Bill, any]) => {
      this.bill = data[0];
      this.currency = data[1];
      this.isLoaded = true;
    });
  }

  onRefresh() {
      this.isLoaded = false;
      this.billService.getCurrency().subscribe((currency: any) => {
        this.currency = currency;
        this.isLoaded = true;
      })
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
