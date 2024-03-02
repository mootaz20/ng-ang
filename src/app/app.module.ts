import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './container/search/search.component';
import { containerComponent } from './container/container.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailsComponent } from './container/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    NavbarComponent,
    containerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
