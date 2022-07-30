import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginapp',
  templateUrl: './loginapp.component.html',
  styleUrls: ['./loginapp.component.css']
})
export class LoginappComponent implements OnInit {
  user = { Username: '', Password: '' }
  constructor() { }

  ngOnInit(): void {
  }
  login() {
    console.log(this.user);
  }
  login2(user: any) {
    console.log(user)
  }
}
