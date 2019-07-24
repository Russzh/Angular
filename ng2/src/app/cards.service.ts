import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators/'; 


@Injectable()
export class CardsSevice {

    constructor(private http: HttpClient) { }

    getCards() {
        return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb')
            .pipe(map(response => response.results))
            .pipe(map(cards => {
                return cards.map(c => {
                    return {
                        name: c.name.first + ' ' + c.name.last,
                        geo: c.location.city,
                        image: c.picture.large
                    }
                });
            }));
    }
} 