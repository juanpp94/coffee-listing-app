import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiDevChallenge } from '../../core/config/apis/api-devchallenges.config'
import { Product } from '../types/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsHttpService {

  private readonly url: string = ApiDevChallenge.baseUrl;


  constructor(private http: HttpClient) {
    
   }

   public fetchList$() {
    return this.http.get<Product[]>(this.url);
   }

   public fetchFilter$() {
    return
   }


}
