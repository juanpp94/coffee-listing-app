import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiDevChallenge } from 'src/app/core/config/apis/api-dev-challenge';

@Injectable({
  providedIn: 'root'
})
export class ProductshttpService {

  private readonly url: string = ApiDevChallenge.baseUrl;

  constructor(private http: HttpClient) {
    
   }

   public getList$(): void {
    this.http.get<any>(this.url);
   }


}
