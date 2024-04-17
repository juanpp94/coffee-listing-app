import { Injectable } from '@angular/core';
import { Subject, shareReplay } from 'rxjs';
import { Product } from '../types/product';
import { ProductsHttpService } from './products-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly productsSubject = new Subject<Product[]>();
  public product: Product = {available: false, id: -1, image: '', name: '', popular: false, price: '', rating: -1, votes: -1  }
  constructor(private http: ProductsHttpService) { }

 
  public getProduct() {
    return this.product;
  }
  public fetch$(id: Product['id']) {
  } 

  public getList$() {
    return this.productsSubject.asObservable().pipe(shareReplay(1));
  }

  public fetchProductsList$() {
    this.http.fetchList$().subscribe({next: this.nextFetchList, error: this.errorFetchList});
   
  }



  private nextFetchList = (products: Product[]) => {
    this.productsSubject.next(products);
  }

  private errorFetchList = () => {
    this.productsSubject.next([]);
  }
}
