import { Component, OnInit } from '@angular/core';
import { CardsSevice } from 'src/app/cards.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  cards = [ ];
  searchStr = '';

  constructor(private cardsService:CardsSevice ) { }

  ngOnInit() {
    this.cardsService.getCards().subscribe(cards => {
      this.cards = cards 
    });
    // this.cards = this.cardsService.cards
  }

}
