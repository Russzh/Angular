import { Component, OnInit } from '@angular/core';
import { CardsSevice } from 'src/app/cards.service';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css']
})
export class SetupPageComponent implements OnInit {

  size;

  constructor(private cardsService:CardsSevice) { }

  ngOnInit() {
    this.size = this.cardsService.size;
  }

  onChange() {
    this.cardsService.setSize(+this.size)
  }
}
