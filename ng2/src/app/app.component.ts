import { Component } from '@angular/core';
import { CardsSevice } from './cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CardsSevice]
})
export class AppComponent {

}
