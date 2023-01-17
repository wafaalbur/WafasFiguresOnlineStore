import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FiguresDetailsComponent } from './Components/figures-details/figures-details.component';
import { FiguresListComponent } from './Components/figures-list/figures-list.component';
import { CartPageComponent } from './Components/cart-page/cart-page.component';
import { CheckoutPageComponent } from './Components/checkout-page/checkout-page.component';

// sets up routes constant where you define your routes
// with thier components with the <router-outlet> in the template

// <****************************************SOURCES****************************************>
// sources: CLI application routing module && Add a hero detail route
// at https://angular.io/guide/router && https://angular.io/tutorial/tour-of-heroes/toh-pt5 

const routes: Routes = [
  {path: '',  title: 'Figure Store Front Page', component: FiguresListComponent},
  {path: 'cart', title: 'Your Cart', component: CartPageComponent},
  {path: 'figure-detail/:id', title: 'Figure Detail Page',component: FiguresDetailsComponent},
  {path: 'successful/:fullName/:totalPrice', title: 'Checkout Page', component: CheckoutPageComponent}
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

