import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../types/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.fetchProductList$();
    this.getProductsList();
    
  }

  fetchProductList$() {
    this.productsService.fetchProductsList$();
  }

  getProductsList() {
    this.productsService.getList$().subscribe(
      (products: Product[]) => {
        this.products = products;
        console.log("hola",this.products);
      }
    )
  }
}
