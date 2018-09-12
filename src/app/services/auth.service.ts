import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password).then(value => {
      this.emailVerification();
      console.log('Usuario creado satisfactoriamente => ' + value);
    }).catch(error => {
      console.log('Creación de usuario fallida =>' + error.message);
    });
  }

  login(email: string, password: string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(value => {
      console.log('Usuario logeado');
      this.router.navigateByUrl('/show_notes');
      this.observer();
    }).catch(error => {
      console.log('Usuario no pudo ingresar => ' + error.message);
    });
  }

  emailVerification() {
    const user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function () {
      console.log('El correo ha sido enviado, se espera confirmación...');
      // Email sent.
    }).catch(function (error) {
      console.log('Correo no enviado =>' + error);
      // An error happened.
    });
  }

  observer() {
    this.firebaseAuth.auth.onAuthStateChanged(user => {
      let displayName, email, emailVerified, photoURL, isAnonymous, uid, providerData;
      if (user) {
        displayName = user.displayName;
        email = user.email;
        emailVerified = user.emailVerified;
        photoURL = user.photoURL;
        isAnonymous = user.isAnonymous;
        uid = user.uid;
        providerData = user.providerData;
      }
      console.log('displayName => ' + displayName);
      console.log('email => ' + email);
      console.log('emailVerified => ' + emailVerified);
      console.log('photoURL => ' + photoURL);
      console.log('isAnonymous => ' + isAnonymous);
      console.log('uid => ' + uid);
      console.log('providerData => ' + providerData);
      return user;
    });
  }

  logout() {
    this.firebaseAuth.auth.signOut();
    this.router.navigateByUrl('/auth');
    console.log('Se ha cerrado la sesion satisfactoriamente');
  }

}
