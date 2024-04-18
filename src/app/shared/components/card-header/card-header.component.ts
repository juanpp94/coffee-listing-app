import { Component, Input } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { Product } from 'src/app/products/types/product';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss']
})
export class CardHeaderComponent {

  @Input() product: Product = this.productService.getProduct();
  
  constructor(private productService: ProductsService) {

  }
  
}
