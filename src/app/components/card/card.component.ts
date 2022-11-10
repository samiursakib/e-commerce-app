import { Component, Input, OnInit } from '@angular/core';
import { ItemInterface, ITEMS } from 'src/assets/data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() item?: ItemInterface;
  constructor() { }

  ngOnInit(): void {
    console.log(this.item?.name);
  }

}
