import { Component,EventEmitter,Input, Output } from '@angular/core';
import { product } from 'src/app/Models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input()
  productListComp: ProductListComponent;
  product:product ;
  @Output()
  closeModal: EventEmitter<boolean> = new  EventEmitter<boolean>();
  onClose(){
    this.closeModal.emit(true);
  }
  ngOnInit(){
    this.product =  this.productListComp.selectedProduct;
  }

}
