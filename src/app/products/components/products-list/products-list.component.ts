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
  filteredProducts: Product[] = [];
  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.fetchProductList$();
    this.getProductsList();
    
  }

  fetchProductList$() {
    this.productsService.fetchProductsList$();
  }

  updateProductsList(filter: string): void {
    console.log("prueba de que llega al componente",filter);
    this.productsService.setFilter(filter);
    this.filteredProducts = this.getFilteredProductsList();
  }

  getFilteredProductsList(): Product[] {
    let filteredProducts = this.productsService.getFilteredProductsList(this.products);
    return filteredProducts;
  }

  getProductsList() {
    this.productsService.getList$().subscribe(
      (products: Product[]) => {
        this.products = products;
        this.filteredProducts = products;
        console.log("hola",this.products);
      }
    )
  }
}
