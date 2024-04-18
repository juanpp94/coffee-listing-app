import { Component, Input } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { Product } from 'src/app/products/types/product';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss']
})
export class CardBodyComponent {

  @Input() product: Product = this.productService.getProduct();

  constructor(private productService: ProductsService) {

  }
}
