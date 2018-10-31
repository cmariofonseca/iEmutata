import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../controller/user.controller';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})

export class RegisterModel {

  users: Observable<User[]>;
  private usersCollection: AngularFirestoreCollection<User>;

  constructor(
    private router: Router,
    private afs: AngularFirestore) {
    this.usersCollection = this.afs.collection<User>('users');
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        return {...data };
      }))
    );
  }

  listUsers(): Observable<User[]> {
    return this.users;
  }

  registerOfUser() {
    this.router.navigateByUrl('/entry_notes');
  }

  createUsers(user: User) {
    this.usersCollection.add(user);
  }

}
