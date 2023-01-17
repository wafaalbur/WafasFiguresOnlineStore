import { Component, OnInit, Input } from '@angular/core';
import { Figures } from '../models/figures';
// import { FiguresCart } from '../../models/figuresCart';
import { FiguresService } from '../../Services/figures.service';

@Component({
  selector: 'app-figures-list',
  templateUrl: './figures-list.component.html',
  styleUrls: ['./figures-list.component.css']
})
export class FiguresListComponent implements OnInit {
  @Input() products: Figures[] = [];
  //input dropdown count
  figuresCount: string[]= ["1", "2", "3", "4", "5"];
  //

  constructor(private figService: FiguresService){}
  // products: Figures[] = [];
  ngOnInit(): void {
    this.figService.getallFigures().subscribe(res =>{
      this.products = res;
    })
  }
  
  //selection starts at 1
  selectedItem = '1';
  Selection(value: any) {
    this.selectedItem = value;
  }

  onSubmit(cartItems: Figures): void {
    
    const findFigure: Figures[] | [] = this.figService.getFigures();
    const checkIt = findFigure.find((cart) => cart.id == cartItems.id)
    let newItem: Figures[]=[];
    let ItemExist: boolean = false;

    newItem = findFigure;

    if(checkIt) {
      checkIt.option = this.selectedItem;
      ItemExist ? this.figService.addToCart(newItem): null;
    } else {
      newItem.push(Object.assign(cartItems, {option: this.selectedItem}));
      this.figService.addToCart(newItem)
      const message = `You have add ${cartItems.name}'s figure in your cart.`;
      alert(message);
    }
  }

}
