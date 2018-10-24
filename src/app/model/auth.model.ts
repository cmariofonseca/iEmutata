import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthModel {

  user: Observable<firebase.User>;
  userUid: string;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password).then(value => {
      this.emailVerification();
    }).catch(error => {
      // message error
    });
  }

  login(email: string, password: string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(value => {
      this.router.navigateByUrl('/show_notes');
      this.observer();
    }).catch(error => {
      // message error
    });
  }

  emailVerification() {
    const user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function () {
      // Email sent.
    }).catch(function (error) {
      // An error happened.
    });
  }

  observer(): string {
    let newUser: firebase.User;
    this.firebaseAuth.auth.onAuthStateChanged(user => {
      if (user.uid) { this.userUid = user.uid; }
      return newUser = user;
    });
    return this.userUid;
  }

  logout() {
    this.firebaseAuth.auth.signOut();
    this.router.navigateByUrl('/auth');
  }

}
