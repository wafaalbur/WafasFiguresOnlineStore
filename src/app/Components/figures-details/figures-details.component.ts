import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Figures } from '../models/figures';
import { FiguresService } from '../../Services/figures.service';

@Component({
  selector: 'app-figures-details',
  templateUrl: './figures-details.component.html',
  styleUrls: ['./figures-details.component.css']
})

export class FiguresDetailsComponent implements OnInit {
  id: number | null = null;
  figures: Figures[]= [];
  figure!: Figures;
 
  //input dropdown count
  figuresCount: string[]= ["1", "2", "3", "4", "5"];

  selectedItem = '1';
  Selection(value: any) {
    this.selectedItem = value;
  }
  constructor(private route: ActivatedRoute, private figService: FiguresService){}

  ngOnInit(): void {
    // displaying figure by id using getallFigures service point at data.json
    this.figService.getallFigures().subscribe(res => {
      this.figures = res;
      this.figure = this.getFigureById(this.id)
      console.log(this.figure)
    })
    //get figure by id to disbaly
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    })
  }
  
  getFigureById(id: number | null): Figures{
    //get figure by id to disbaly 
    return this.figures.filter(product => product.id == id)[0];
  }

  onSubmit(cartItems: Figures): void {
    
    let newItem: Figures[]=[];
    //
    const findFigure: Figures[] | [] = this.figService.getFigures();
    newItem = findFigure;
    let ItemExist: boolean = false;
    //
    const checkIt = findFigure.find((cart) => cart.id == cartItems.id)

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
