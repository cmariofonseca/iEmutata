import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User, Student } from '../controller/user.controller';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})

export class StudentModel {

  students: Observable<Student[]>;
  private studentsCollection: AngularFirestoreCollection<Student>;

  constructor(
    private router: Router,
    private afs: AngularFirestore) {
    this.studentsCollection = this.afs.collection<Student>('students');
    this.students = this.studentsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Student;
        return {...data };
      }))
    );
  }

  listStudents(): Observable<Student[]> {
    return this.students;
  }

  createStudent(student: Student): void {
    this.studentsCollection.add(student);
  }

}
