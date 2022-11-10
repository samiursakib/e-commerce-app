import { Component, ViewChild } from '@angular/core';
import { ItemInterface, ITEMS } from 'src/assets/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Hello world';
  items: ItemInterface[] = ITEMS;
  
  ngOnInit() {
    
  }
}


@Component({
  selector: 'header-component',
  templateUrl: './app.component.html',
})

export class HeaderComponent {}

