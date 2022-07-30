import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { FavoriteproductComponent } from './favoriteproduct/favoriteproduct.component';
import { ProductcartComponent } from './productcart/productcart.component';
import { SliceproductPipe } from './_pips/sliceproduct.pipe';
import { FilterproductPipe } from './_pips/filterproduct.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeighlightDirective } from './_directive/heighlight.directive';
import { RepeateleDirective } from './_directive/repeatele.directive';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LoginappComponent } from './loginapp/loginapp.component';
import { AddproductComponent } from './addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductcardComponent,
    FavoriteproductComponent,
    ProductcartComponent,
    SliceproductPipe,
    FilterproductPipe,
    HeighlightDirective,
    RepeateleDirective,
    ErrorpageComponent,
    LoginappComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
