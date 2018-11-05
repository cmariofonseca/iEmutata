import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthModel } from 'src/app/model/auth.model';

@Component({
  selector: 'app-auth',
  templateUrl: '../view/auth/auth.view.html',
  styleUrls: ['../view/auth/auth.view.css']
})

export class AuthComponent implements OnInit {

  closeModal: boolean;
  email: string;
  password: string;

  constructor(private router: Router, public authMdl: AuthModel) {
  }

  ngOnInit() {
    this.closeModal = true;
  }

  signup() {
    if (this.email !== '' && this.password !== '') {
      this.closeModal = false;
      this.authMdl.signup(this.email, this.password);
      this.email = this.password = '';
      this.closeModal = true;
    }
  }

  login() {
    this.authMdl.login(this.email, this.password);
    this.email = this.password = '';
  }

  register() {
    this.router.navigateByUrl('/register');
  }

}
