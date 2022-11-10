import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, HeaderComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CardComponent } from './components/card/card.component';
import { ItemComponent } from './components/item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MyCartComponent,
    ProductsComponent,
    CardComponent,
    ItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
