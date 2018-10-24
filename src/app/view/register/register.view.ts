import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthModel } from 'src/app/model/auth.model';
import { User } from 'src/app/controller/user.controller';
import { RegisterModel } from 'src/app/model/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.view.html',
  styleUrls: ['./register.view.css']
})

export class RegisterComponent implements OnInit {

  user: User;

  constructor(
    private router: Router,
    private auth: AuthModel,
    private register: RegisterModel) {
  }

  ngOnInit() {
    this.auth.observer();
    this.user = {
      name: '',
      phone: 0,
      userID: '',
      lastName: '',
      typeUser: '',
      studentDoc: ''
    };
  }

  sendUserForRegister(): void {
    this.user.userID = this.auth.userUid,
    this.register.createUsers(this.user);
    this.user = {
      name: '',
      phone: 0,
      userID: '',
      lastName: '',
      typeUser: '',
      studentDoc: ''
    };
    this.router.navigateByUrl('/show_notes');
  }

}
