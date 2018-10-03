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
import { AuthComponent } from './components/auth/auth.component';
import { ShowNotesComponent } from './components/show-notes/show-notes.component';

// Routes
import { APP_ROUTING } from './routes/route.routes';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ShowNotesComponent,
    RegisterComponent
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
