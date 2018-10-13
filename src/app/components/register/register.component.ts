import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  user: User;
  studentsID: string[];

  constructor(
    private router: Router,
    private authSvc: AuthService,
    private registerSvc: RegisterService) {
  }

  ngOnInit() {
    this.authSvc.observer();
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
    this.user.userID = this.authSvc.userUid,
    this.registerSvc.createUsers(this.user);
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
