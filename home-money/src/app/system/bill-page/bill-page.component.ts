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

  constructor(private billService: BillService) { }

  ngOnInit() {
    combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
    ).subscribe((data:[Bill, any]) => {
      console.log(data);
    });
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
