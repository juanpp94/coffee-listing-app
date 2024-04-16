import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ProductCardComponent
  ]
})
export class SharedModule { }
