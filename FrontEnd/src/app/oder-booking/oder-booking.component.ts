import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oder-booking',
  templateUrl: './oder-booking.component.html',
  styleUrls: ['./oder-booking.component.css']
})
export class OderBookingComponent implements OnInit {

  user!:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router) { }

  cartItem:any;

  subtotal = 0;
  totalamount = 0;

  ngOnInit(): void {

    
    this.user = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      address: [''],
      
      zip: ['']    });

 this.getCart();
  this.getTotalAmount();
  
  }

  getCart(){
    this.cartItem = JSON.parse(localStorage.getItem('cart') as string) ?? [];
    console.log(this.cartItem);
  }

  getTotalAmount(){
    this.subtotal = 0;
    this.getCart();
    this.cartItem.forEach((item:any) => {
      this.subtotal += item.price;
    });

    var tax = this.subtotal * 0.13;
    this.totalamount = this.subtotal + tax;
     }
  goToPayment(){
    if(this.user.value.name == '' || this.user.value.email == '' || this.user.value.phone == '' || this.user.value.address == '' || this.user.value.zip == ''){
      alert('Please fill all the fields');
      return;
    }
    else{
      localStorage.setItem('user', JSON.stringify(this.user.value));
      this.router.navigate(['/corder']);
    }
  }
}
