import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// The new component is automatically imported here: 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiguresListComponent } from './Components/figures-list/figures-list.component';
import { FiguresDetailsComponent } from './Components/figures-details/figures-details.component';
import { HeadingComponent } from './Components/heading/heading.component';
import { CheckoutPageComponent } from './Components/checkout-page/checkout-page.component';
import { CartPageComponent } from './Components/cart-page/cart-page.component';


@NgModule({
  declarations: [ // The new component is added to declarations 
    AppComponent,
    FiguresListComponent,
    FiguresDetailsComponent,
    HeadingComponent,
    CheckoutPageComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// sources: Importing a feature module 
// at https://angular.io/guide/feature-modules 

// Udacity: https://learn.udacity.com/nanodegrees/nd0067-mcit/parts/cd0294/lessons/de857af2-179c-4c15-ac8d-a1135c10199f/concepts/5026fbe4-afb5-4332-9d2d-5a1d595ba3cf

