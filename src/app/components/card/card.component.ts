import { Component, Input, OnInit } from '@angular/core';
import { ItemInterface } from 'src/assets/data';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() item?: ItemInterface;
  count: number = 0;
  isSelected: boolean = false;
  // itemWithId: 
  faPlus = faPlus;
  faMinus = faMinus;

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.isSelected = true;
    if(!this.count) this.count = 1;
  }
  
  incrementCount(): void {
    if(this.item!.quantity > 0) {
      this.item!.quantity--;
      this.count++;
      console.log(this.count, this.item!.quantity);
    }
  }

  decrementCount(): void {
    if(this.count > 0) {
      this.item!.quantity++;
      this.count--;
    }
  }

  

}
