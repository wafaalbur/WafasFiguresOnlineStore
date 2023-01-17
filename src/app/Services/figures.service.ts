import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//
import { Figures } from '../Components/models/figures';

@Injectable({
  providedIn: 'root'
})

export class FiguresService {
  constructor(private http: HttpClient) {}
  
  // <****************************************SOURCES****************************************>
  // Udacity Leasons
  // + https://learn.udacity.com/nanodegrees/nd0067-mcit/parts/cd0294/lessons/1e5750c6-1a9d-4f31-8e5b-21972b14b4fe/concepts/c24fbb1d-6dc3-44be-92cb-3e3ae455312b
  // + https://learn.udacity.com/nanodegrees/nd0067-mcit/parts/cd0294/lessons/8895c31e-42c8-4e57-b812-a7997e009551/concepts/4003d74a-f774-4dc9-b863-ad9e8501c679 
  
  addToCart(Figures: Figures[]): void {
    // adding a data to the local storage 
    // storing data in 'figures' 
    // also using JSON.stringify to convert the array of figures into a string 
    window.localStorage.setItem('figures', JSON.stringify(Figures));
  }  
  getFigures(): Figures[] | [] {
    // reading back the data saved in the localstorage 
    const getProduct = window.localStorage.getItem('figures')
    return getProduct? JSON.parse(getProduct): [];
  }

  getallFigures(): Observable<Figures[]>{
    // getting main data from the assets to use them around 
    return this.http.get<Figures[]>('http://localhost:4200/assets/data.json');
  }

}
