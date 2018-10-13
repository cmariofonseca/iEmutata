import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User, Student } from '../models/user.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  students: Observable<Student[]>;
  studentsID: Observable<string[]>;
  private studentsCollection: AngularFirestoreCollection<Student>;

  constructor(
    private router: Router,
    private authSvc: AuthService,
    private afs: AngularFirestore) {
    this.studentsCollection = this.afs.collection<Student>('students');
    this.students = this.studentsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        return {...data };
      }))
    );
    this.studentsID = this.studentsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const id = a.payload.doc.id;
        return id;
      }))
    );
  }

  listStudents(): Observable<Student[]> {
    return this.students;
  }

  listStudentsID(): Observable<string[]> {
    return this.studentsID;
  }

}
