import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Hello world';
}


@Component({
  selector: 'header-component',
  templateUrl: './app.component.html',
})

export class HeaderComponent {
  // @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  // someMethod() {
  //   this.trigger.openMenu();
  // }
}
