import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-a-home',
  templateUrl: './a-home.component.html',
  styleUrls: ['./a-home.component.css']
})
export class AHomeComponent implements OnInit {

  constructor(private prService:ProductService) { }

  product:any;
  ngOnInit(): void {
    this.getAllProduct();
  }
  toggle() {
    const button = document.querySelector('#mb-menu-toggle');
    const header = document.querySelector('#header-wrapper');
      header?.classList.add('active');
  }
  closetoggle() {
    const header = document.querySelector('#header-wrapper');
      header?.classList.remove('active');
  }


  getAllProduct(){ 
    this.prService.getAllProduct().subscribe((data)=>{
      this.product = data;
      console.log(data);
    });
  }


  deleteProduct(id:any){
    this.prService.deleteProduct(id).subscribe((data)=>{
      console.log(data);
      this.getAllProduct();
    });
  }
}
