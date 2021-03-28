import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';



@NgModule({
  declarations: [ListProductComponent, ProductDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [ListProductComponent, ProductDetailComponent]
})
export class ProductModule { }
