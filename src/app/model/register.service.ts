import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../controller/user.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  users: Observable<User[]>;
  private usersCollection: AngularFirestoreCollection<User>;

  constructor(
    private afs: AngularFirestore,
    private authSvc: AuthService,
    private router: Router) {
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
    this.router.navigateByUrl('/register');
  }

  createUsers(user: User) {
    this.usersCollection.add(user);
  }

}
