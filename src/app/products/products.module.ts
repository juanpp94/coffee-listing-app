import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SharedModule } from '../shared/shared.module';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { SectionFilterComponent } from './components/section-filter/section-filter.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    SectionHeaderComponent,
    SectionFilterComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
  ],
  exports: [
    ProductsListComponent
  ]
})
export class ProductsModule { }
