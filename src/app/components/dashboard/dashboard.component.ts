import { Component, Input, OnInit } from '@angular/core';
import { ItemInterface, ITEMS } from 'src/assets/data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: ItemWithIdInterface[] = ITEMS.map(obj => ({...obj, id: (Math.random() * 1e16).toString()}));
  
  constructor() { };

  ngOnInit(): void {
    
  };

};

export interface ItemWithIdInterface extends ItemInterface {
  id: string
}
