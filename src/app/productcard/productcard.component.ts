import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../_interface/iproduct';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {
  @Input('productData') product?: IProduct;
  @Output() OnSelectedUser: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
  }
  productselected(product: IProduct): void {
    this.OnSelectedUser.emit(product);
  }
  setproductdata(product: IProduct) {
    this.productservice.setProductdata(product);
  }
}
