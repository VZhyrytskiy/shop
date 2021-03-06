import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product-list/product/product.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';



@NgModule({
  declarations: [ProductComponent,ProductListComponent],
  imports: [
    CommonModule
  ],
  exports:[ProductComponent,ProductListComponent]
})
export class ProductsModule { }
