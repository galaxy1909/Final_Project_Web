import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';
import { OderBookingComponent } from './oder-booking/oder-booking.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { COrderComponent } from './corder/corder.component';
import { AloginComponent } from './alogin/alogin.component';
import { AProductComponent } from './a-product/a-product.component';
import { EProductComponent } from './e-product/e-product.component';
import { AHomeComponent } from './a-home/a-home.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    CartComponent,
    OderBookingComponent,
    COrderComponent,
    AloginComponent,
    AProductComponent,
    EProductComponent,
    AHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
