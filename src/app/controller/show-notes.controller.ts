import { Observable } from 'rxjs';
import { User, Student } from './user.controller';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthModel } from 'src/app/model/auth.model';
import { StudentModel } from '../model/student.model';
import { RegisterModel } from '../model/register.model';

@Component({
  selector: 'app-show-notes',
  templateUrl: '../view/show-notes/show-notes.view.html',
  styleUrls: ['../view/show-notes/show-notes.view.css']
})

export class ShowNotesComponent implements OnInit {

  subject: string;
  currentUser: User;
  currentStudent: Student;
  observableStudent: Observable<Student>;

  constructor(
    public authMdl: AuthModel,
    public studentMdl: StudentModel,
    public registerMdl: RegisterModel) {
  }

  ngOnInit(): void { }

  logout(): void {
    this.authMdl.logout();
  }

  /*ngOnDestroy(): void {
    this.observableStudent;
  }*/

}
