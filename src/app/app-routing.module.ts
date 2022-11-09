import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'my-cart', component: MyCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
