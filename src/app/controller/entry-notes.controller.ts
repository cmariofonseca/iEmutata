import { Subscription } from 'rxjs';
import { Student } from './user.controller';
import { AuthModel } from '../model/auth.model';
import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../model/student.model';
import { RegisterModel } from '../model/register.model';

@Component({
  selector: 'app-entry-notes',
  templateUrl: '../view/entry-notes/entry-notes.view.html',
  styleUrls: ['../view/entry-notes/entry-notes.view.css']
})

export class EntryNotesComponent implements OnInit {

  noteOne: number;
  noteTwo: number;
  noteFour: number;
  noteFive: number;
  student: Student;
  noteThree: number;
  totalNote: number;
  currentPeriod: string;
  currentSubject: string;
  currentStudent: Student;
  studentsList: Student[];
  ObservableStudentsList: Subscription;

  constructor(
    public authMdl: AuthModel,
    public studentMdl: StudentModel,
    public registerMdl: RegisterModel) {
  }

  ngOnInit(): void {
    this.totalNote = 0.0;
    this.currentStudent = {
      name: '',
      phone: undefined,
      userID: '',
      lastName: '',
      subjects: [
        {
          name: '',
          periods: []
        }
      ]
    };
    this.studentMdl.listStudents().subscribe(students => {
      this.studentsList = students;
    });
  }

  fillStudentsList(): void {
  }

  selectedStudent(student: Student): void {
    console.log('selectedStudent()');
    this.currentStudent = student;
    console.log(this.currentStudent);
  }

  logout(): void {
    this.authMdl.logout();
  }

  averageNotes(): void {
    console.log('averageNotes()');
    console.log(this.totalNote);
    this.totalNote = (this.noteOne +
    this.noteTwo +
    this.noteThree +
    this.noteFour +
    this.noteFive) / 5;
    console.log(this.totalNote);
  }

  saveNotesCurrentStudent(): void {
    this.currentStudent = {
      name: this.currentStudent.name,
      phone: undefined,
      userID: '',
      lastName: '',
      subjects: [
        {
          name: this.currentSubject,
          periods: []
        }
      ]
    };
  }

}
