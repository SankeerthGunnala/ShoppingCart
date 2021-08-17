import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../entities/product.entity';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit { 

  public products: Product[];

  constructor( private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.findAll();
  }
}
