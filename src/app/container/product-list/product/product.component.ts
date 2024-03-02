import { Component, Input } from '@angular/core';
import { product } from 'src/app/Models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css','../product-list.component.css']
})
export class ProductComponent {
  @Input()
  product:product;
}
