import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Student } from '../controller/user.controller';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class StudentModel {

  studentsList: Student[];
  students: Observable<Student[]>;
  private studentsDocument: AngularFirestoreDocument<Student>;
  private studentsCollection: AngularFirestoreCollection<Student>;

  constructor(private afs: AngularFirestore) {
      this.studentsCollection = this.afs.collection<Student>('students');
      this.students = this.studentsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Student;
        return {...data };
      }))
    );
  }

  listStudents(): Student[] {
    this.students.subscribe(students => {
      this.studentsList = students;
    });
    return this.studentsList;
  }

  createStudent(student: Student): void {
    this.studentsCollection.add(student);
  }

  updateNotesCurrentStudent(student: Student): void {
    this.studentsDocument = this.afs.doc<Student>(`students/${student.userID}`);
    this.studentsDocument.update(student);
  }

}
