import { Component, Input } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { Product } from 'src/app/products/types/product';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss']
})
export class CardFooterComponent {

  @Input() product: Product = this.productService.getProduct();

  constructor(private productService: ProductsService) {

  }

}
