import { Component, OnInit } from '@angular/core';
import { AuthModel } from 'src/app/model/auth.model';
import { RegisterModel } from 'src/app/model/register.model';

@Component({
  selector: 'app-auth',
  templateUrl: '../view/auth/auth.view.html',
  styleUrls: ['../view/auth/auth.view.css']
})

export class AuthComponent implements OnInit {

  email: string;
  password: string;

  constructor(public auth: AuthModel, private registerMdl: RegisterModel) { }

  ngOnInit() { }

  signup() {
    this.auth.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.auth.login(this.email, this.password);
    this.email = this.password = '';
  }

  register() {
    this.registerMdl.registerOfUser();
  }

}
