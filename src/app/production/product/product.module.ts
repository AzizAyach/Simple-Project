import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'product', component: ListProductComponent },
  { path: 'product/detail:id', component: ProductDetailComponent }
];

@NgModule({
  declarations: [ListProductComponent, ProductDetailComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  //exports: [ListProductComponent, ProductDetailComponent]
  
})
export class ProductModule { }
