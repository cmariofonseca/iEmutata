import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  email: string;
  password: string;

  constructor(public authSvc: AuthService, private registerSvc: RegisterService) { }

  ngOnInit() { }

  signup() {
    this.authSvc.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authSvc.login(this.email, this.password);
    this.email = this.password = '';
  }

  register() {
    this.registerSvc.registerOfUser();
  }

}
