import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { User, Student } from '../controller/user.controller';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthModel } from './auth.model';
import { StudentModel } from './student.model';

@Injectable({
  providedIn: 'root'
})

export class RegisterModel {

  usersList: User[];
  userCurrent: User;
  studentsList: Student[];
  studentCurrent: Student;
  users: Observable<User[]>;
  private usersCollection: AngularFirestoreCollection<User>;

  constructor(private afs: AngularFirestore, private authMdl: AuthModel, private studentMdl: StudentModel) {
    this.usersCollection = this.afs.collection<User>('users');
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        return {...data };
      }))
    );
  }

  listUsers(): User[] {
    this.users.subscribe(users => {
      this.usersList = users;
    });
    if (this.usersList) {
      this.currentUser();
    }
    this.studentsList = this.studentMdl.listStudents();
    return this.usersList;
  }

  currentUser(): User {
    if (this.usersList) {
      for (const user of this.usersList) {
        if (user.userID === this.authMdl.userUid) {
          this.userCurrent = user;
        }
      }
    }
    if (this.userCurrent) {
      this.currentStudent();
    }
    return this.userCurrent;
  }

  currentStudent(): Student {
    if (this.studentsList) {
      for (const student of this.studentsList) {
        if (student.studentDoc === this.userCurrent.studentDoc) {
          this.studentCurrent = student;
        }
      }
    }
    return this.studentCurrent;
  }

  createUsers(user: User) {
    this.usersCollection.add(user);
  }

}
