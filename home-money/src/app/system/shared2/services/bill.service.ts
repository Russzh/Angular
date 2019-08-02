import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from '../models/bill.model';

@Injectable()
export class BillService {
    constructor (private http:HttpClient) { }

        getBill() {
            return this.http.get('http://localhost:3000/bill');
        }

        getCurrency() {
            return this.http.get('http://data.fixer.io/api/latest?access_key=2ed306bccf50a70459e7e6087ba1d9b7&format=1')
        }


}