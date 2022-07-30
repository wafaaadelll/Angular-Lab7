import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LoginappComponent } from './loginapp/loginapp.component';
import { ProductcartComponent } from './productcart/productcart.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  { path: 'products', component: ProductlistComponent },
  { path: 'login', component: LoginappComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'dtl/:id', component: ProductcartComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', component: ErrorpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
