import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router:Router) { }

  admin!:FormGroup;
  ngOnInit(): void {

    this.admin = this.formBuilder.group({
      uname: [''],
      password: ['']
    });
  }
  
  login(){
    if(this.admin.value.uname == 'admin' && this.admin.value.password == 'admin'){
      alert('Login Success');
      localStorage.setItem('admin', JSON.stringify(this.admin.value));
      this.router.navigate(['/ahome']);
    }
    else{
      alert('Invalid Username or Password');
    }
  }

}
