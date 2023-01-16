import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Figures } from '../Components/models/figures';
// import { FiguresCart } from '../models/figuresCart';

@Injectable({
  providedIn: 'root'
})
export class FiguresService {
  addToCart(Figures: Figures[]): void {
    window.localStorage.setItem('figures', JSON.stringify(Figures));
  }
  constructor(private http: HttpClient) {}
  
  getallFigures(): Observable<Figures[]>{
    return this.http.get<Figures[]>('http://localhost:4200/assets/data.json');
  }
  getFigures(): Figures[] | [] {
    const getProduct = window.localStorage.getItem('figures')
    return getProduct? JSON.parse(getProduct): [];
  }

}
