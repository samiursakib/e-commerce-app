import { Component, Input, OnInit } from '@angular/core';
import { ItemInterface, ITEMS } from 'src/assets/data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: ItemInterface[] = ITEMS;
  constructor() { }

  ngOnInit(): void {
    console.log(this.items);
  }

}
