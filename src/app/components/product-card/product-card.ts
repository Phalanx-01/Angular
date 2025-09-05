import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  productName = input.required<string>();
  price = input.required<number>();
  inStock = input.required<boolean>();
}
