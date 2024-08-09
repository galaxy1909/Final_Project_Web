import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  getAllProduct(){
    return this.http.get("http://localhost:3000/product");
  }


  deleteProduct(id:any){
    return this.http.delete("http://localhost:3000/product/"+id);
  }
}
