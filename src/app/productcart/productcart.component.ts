import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../_interface/iproduct';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'app-productcart',
  templateUrl: './productcart.component.html',
  styleUrls: ['./productcart.component.css']
})
export class ProductcartComponent implements OnInit {
  @Input() productdtl?: IProduct;
  myCartItems: IProduct[] = [];
  productdtldata?: IProduct;
  productid: number = 0;


  constructor(private productservice: ProductService, private arout: ActivatedRoute) { }
  Productdata?: IProduct;
  ngOnInit(): void {
    this.productservice.selectedProductData.subscribe((data) => {
      this.myCartItems.push(data);
      console.log(JSON.stringify(data))
      console.log(this.myCartItems)
    })
    this.arout.params.subscribe(pram => {
      this.productid = pram['id']
      this.productdtldata = this.productservice.getproductbyid(this.productid)
    })

    this.productservice.getProductData().subscribe(data => {
      this.productdtl = data;
      console.log(JSON.stringify(data))
    })
  }
  removeItem(data: any) {
    const index = this.myCartItems.indexOf(data);
    this.myCartItems.splice(index, 1);
  }
}
