import { Injectable } from '@angular/core';
import { Product } from './entities/product.entity';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[];
    constructor() {
      this.products = [
          { id: 'p01', name: 'Apple iPhone 11', price: 55000, description: "12 MP + 12 MP dual primary camera" },
          {  id: 'p02',name: 'Lenovo Tab M8 ', price: 12999, description: "Android Pie Operating System" },
          {  id: 'p03',name: 'LG 109.22 cm (43 inch)', price: 45999, description: "Active HDR, FilmMaker Mode, Bluetooth Surround Ready" }
      ];
  }

  findAll(): Product[] {
      return this.products;
  }

  find(id: string): Product {
      return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string) {
      for (var i = 0; i < this.products.length; i++) {
          if (this.products[i].id == id) {
              return i;
          }
      }
      return -1;
  }



}
