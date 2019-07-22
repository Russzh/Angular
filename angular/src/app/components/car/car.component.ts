import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name:string;
  speed:number;
  model:string;
  colors:Colors;
  options:string[];
  //test:any;

  constructor() { }

  ngOnInit() {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.colors = {
      car: 'White',
      salon: 'Black',
      wheels: 'Silver' 
    };
    this.options = ['ABS', 'Автопилот', 'Парктроник'];
   // this.test = true; //любой тип данных
  }

  addOpt(option) {
    this.options.unshift(option);
    return false;
  }

  deleteOpt(option){
    for(let i = 0; i < this.options.length; i++){
      if(this.options[i] == option) {
        this.options.splice(i, 1);
        break; 
      }
    }
  }

  carSelect(carName) {
    if(carName == 'bmw'){ 
            this.name = 'BMW';
            this.speed = 280;
            this.model = 'M5';
            this.colors = {
              car: 'Blue',
              salon: 'White',
              wheels: 'Black' 
            };
            this.options = ['ABS', 'Автопилот', 'Парктроник'];
          } else if(carName == 'audi') {
            this.name = 'Audi';
            this.speed = 235;
            this.model = 'RS8';
            this.colors = {
              car: 'White',
              salon: 'Black',
              wheels: 'Silver' 
            };
            this.options = ['Система трека', 'Круиз контроль', 'Высоки клиренс'];
          } else {
              this.name = 'Mercedec';
              this.speed = 225;
              this.model = 'C180';
              this.colors = {
                car: 'White',
                salon: 'Black',  
                wheels: 'Silver' 
              };
              this.options = ['Телевизоры на сидеьях', 'Массаж', 'Парктроник'];
            }
          }
}

interface Colors {
    car:string,
    salon:string,
    wheels:string
}