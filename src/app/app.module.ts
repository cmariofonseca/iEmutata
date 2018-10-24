import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Components
import { AppComponent } from './app.component';
import { AuthComponent } from './view/auth/auth.view';
import { RegisterComponent } from './view/register/register.view';
import { ShowNotesComponent } from './view/show-notes/show-notes.view';

// Routes
import { APP_ROUTING } from './controller/route.controller';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RegisterComponent,
    ShowNotesComponent
  ],
  imports: [
    APP_ROUTING,
    FormsModule,
    BrowserModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
