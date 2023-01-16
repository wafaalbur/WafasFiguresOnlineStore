import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  constructor(private route: ActivatedRoute){}

  fullName: string | null = '';
  totalPrice: number | null = 0;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      //params are passed to router path after submission
      this.fullName = params.get('fullName');
      this.totalPrice = Number(params.get('totalPrice'));
    })
  }

}
