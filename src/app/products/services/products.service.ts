import { Injectable } from '@angular/core';
import { Subject, shareReplay } from 'rxjs';
import { Product } from '../types/product';
import { ProductsHttpService } from './products-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly productsSubject = new Subject<Product[]>();
  private readonly filterSubject = new Subject<string>();
  public product: Product = {available: false, id: -1, image: '', name: '', popular: false, price: '', rating: -1, votes: -1  };
  filter: string = "all";
  constructor(private http: ProductsHttpService) { }

 
  public getProduct() {
    return this.product;
  }

  public setFilter(filter: string) {
    this.filter = filter;
  }

  public getFilter(): string {
    return this.filter;
  }

  public getFilteredProductsList(products: Product[]): Product[] {
    let filterAux = this.getFilter();
    if(filterAux === "all") {
      return products;
    } 
    let filteredProducts = products.filter( (product: Product) => product.available === true);
    return filteredProducts;
  }

  public getList$() {
    return this.productsSubject.asObservable().pipe(shareReplay(1));
  }

  public fetchProductsList$() {
    this.http.fetchList$().subscribe({next: this.nextFetchList, error: this.errorFetchList});
   
  }



  private nextFilter = (filter: string) => {
    this.filterSubject.next(filter);
  }




  private nextFetchList = (products: Product[]) => {
    this.productsSubject.next(products);
  }

  private errorFetchList = () => {
    this.productsSubject.next([]);
  }
}
