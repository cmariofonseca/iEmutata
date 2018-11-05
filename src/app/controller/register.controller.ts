import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthModel } from 'src/app/model/auth.model';
import { User } from 'src/app/controller/user.controller';
import { RegisterModel } from 'src/app/model/register.model';

@Component({
  selector: 'app-register',
  templateUrl: '../view/register/register.view.html',
  styleUrls: ['../view/register/register.view.css']
})

export class RegisterComponent implements OnInit {

  user: User;

  constructor(
    private router: Router,
    private authMdel: AuthModel,
    private registerMdl: RegisterModel) {
  }

  ngOnInit() {
    this.authMdel.observer();
    this.user = {
      name: '',
      phone: undefined,
      userID: '',
      lastName: '',
      typeUser: '',
      studentDoc: ''
    };
  }

  sendUserForRegister(): void {
    this.user.userID = this.authMdel.userUid,
    this.registerMdl.createUsers(this.user);
    this.user = {
      name: '',
      phone: 0,
      userID: '',
      lastName: '',
      typeUser: '',
      studentDoc: ''
    };
    this.router.navigateByUrl('/view_notes');
  }

}
