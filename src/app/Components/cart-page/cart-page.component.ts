import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Figures } from '../models/figures';
import { FiguresService } from '../../Services/figures.service';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})

export class CartPageComponent implements OnInit {

  //input dropdown count
  figuresCount: string[]= ["1", "2", "3", "4", "5"];
  list = window.localStorage;
  totalPrice: number = 0;
  Figures: Figures[]=[];
  fullName: string='';
  address: string='';
  creditCard!: number;
  
  @Output() checkoutSuccessful: EventEmitter<string> = new EventEmitter();

  constructor(private FigService: FiguresService, private route: Router){}

  ngOnInit(): void {
    //get figures add in cart && total priec
    this.Figures = this.FigService.getFigures();
    this.TotalPrice();
  }

  onSubmit() : void{
    this.route.navigateByUrl(`successful/${this.fullName}/${this.totalPrice}`); // Specifying a complete absolute path
    this.list.clear();  // Empty cart after submitting an order for the next order 
    this.checkoutSuccessful.emit(this.fullName); // Directive emitting events and registering handlers
  }
  
  TotalPrice(): void {
    let tPrice = this.Figures.reduce((acc: number, val: number | any) =>{
      return acc + val.price * Number(val.option);}, 0);
    // return total price
    this.totalPrice = tPrice;
    tPrice= Number(this.totalPrice.toFixed(2));
  }

  removeCart(id: number): void {
    // remove cart item by splicing the array
    this.Figures.splice(this.Figures.findIndex(cart => cart.id === id),1);
    //update proce after item removal
    this.TotalPrice();
  }

  CartTotal(id: number, event: number | any ): void {
    //show total proce in acrt based on how many items are in teh cart
    const selectedOption = event.target.options[event.target.options.selectedIndex].value;
    this.Figures[this.Figures.findIndex(cart => cart.id == id)].option = selectedOption
    this.TotalPrice();
  }

}
