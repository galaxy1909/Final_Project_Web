import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { OderBookingComponent } from './oder-booking/oder-booking.component';
import { COrderComponent } from './corder/corder.component';
import { AloginComponent } from './alogin/alogin.component';
import { AHomeComponent } from './a-home/a-home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"cart",component:CartComponent},
  {path:"product/:id",component:ProductComponent},
  {path:"booking",component:OderBookingComponent},
  {path:"corder",component:COrderComponent},
  {path:"login",component:AloginComponent},
  {path:"ahome",component:AHomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
