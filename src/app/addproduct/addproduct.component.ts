import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  constructor(private productservie: ProductService, private redirect: Router) { }
  SchoolDetailsForm!: FormGroup;
  ngOnInit(): void {
  }
  forms = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  })
  get title() {
    return this.forms.get('title') as FormControl
  }
  get description() {
    return this.forms.get('description') as FormControl
  }
  get image() {
    return this.forms.get('image') as FormControl
  }
  get price() {
    return this.forms.get('price') as FormControl
  }
  adduser(user: any) {
    this.productservie.addingUser({
      title: user.title,
      description: user.description,
      image: user.image,
      price: user.price,
    });
    this.redirect.navigate(['']);
    console.log(user);
  }
}
