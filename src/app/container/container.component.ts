import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class containerComponent {
      searchText:string = '';
      onSearchText(value: string){
        this.searchText = value;
      }
      close : boolean = true;
      @ViewChild(ProductListComponent) ProductListComponent : ProductListComponent;
      
      closeDetails(){
        this.close=!this.close;
      }
      dontCLoseTrue(){
        this.close=true;
      }
}
