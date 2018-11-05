import { AuthModel } from '../model/auth.model';
import { Component, OnInit } from '@angular/core';
import { Student, User, Subject, Period } from './user.controller';
import { StudentModel } from '../model/student.model';
import { RegisterModel } from '../model/register.model';

@Component({
  selector: 'app-show-notes',
  templateUrl: '../view/show-notes/show-notes.view.html',
  styleUrls: ['../view/show-notes/show-notes.view.css']
})

export class ShowNotesComponent implements OnInit {

  show: number;
  matNote: number;
  spaPeriods: Period[];
  socPeriods: Period[];
  matPeriods: Period[];
  subjects: Subject[];
  currentParent: User;
  parentsList: User[];
  currentStudent: Student;
  studentsList: Student[];
  notesBySubject: Period[] = [];

  constructor(
    public authMdl: AuthModel,
    public studentMdl: StudentModel,
    public registerMdl: RegisterModel) {
  }

  ngOnInit(): void {
    this.show = 0;
    this.subjects = [];
    this.spaPeriods = [];
    this.socPeriods = [];
    this.matPeriods = [];
    this.studentsList = this.studentMdl.listStudents();
    this.parentsList = this.registerMdl.listUsers();
    this.currentParent = this.registerMdl.currentUser();
    this.currentStudent = this.registerMdl.currentStudent();
    this.definingSubjects();
  }

  definingSubjects() {
    if (this.currentStudent) {
      for (const subject of this.currentStudent.subjects) {
        this.subjects.push(subject);
      }
      this.definingPeriods();
    }
  }

  definingPeriods() {
    if (this.subjects) {
      for (const subject of this.subjects) {
        const subj = subject.name;
        const notes: number[] = [];
        for (const period of subject.periods) {
          const average = period.notes.length;
          let note = period.notes.reduce((a, b) => a + b);
          note = (note / average);
          notes.push(note);
        }
        this.notesBySubject.push({
          name: subj,
          notes: notes
        });
      }
    }
  }

  logout(): void {
    this.authMdl.logout();
  }

  /*ngOnDestroy(): void {
    this.observableStudent;
  }*/

}
