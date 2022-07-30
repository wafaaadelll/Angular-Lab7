import { Component, OnInit } from '@angular/core';
import { IProduct } from '../_interface/iproduct';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  allproduct: IProduct[] = [];
  search = '';
  productdata?: IProduct;
  constructor(private productservic: ProductService) { }

  ngOnInit(): void {
    this.allproduct = this.productservic.getAllProduct()
  }
}
