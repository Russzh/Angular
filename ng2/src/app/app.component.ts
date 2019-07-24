import { Component } from '@angular/core';
import { CardsSevice } from './cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CardsSevice]
})
export class AppComponent {

  cards = [ ];

  constructor(private cardsService:CardsSevice ) { }

  ngOnInit() {
    this.cardsService.getCards().subscribe(cards => {
      this.cards = cards 
    });
    // this.cards = this.cardsService.cards
  }

}
