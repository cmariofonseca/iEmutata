import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

// Components
import { AppComponent } from './app.component';
import { AuthComponent } from './controller/auth.controller';
import { RegisterComponent } from './controller/register.controller';
import { ShowNotesComponent } from './controller/show-notes.controller';
import { EntryNotesComponent } from './controller/entry-notes.controller';

// Routes
import { APP_ROUTING } from './controller/route.controller';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RegisterComponent,
    ShowNotesComponent,
    EntryNotesComponent
  ],
  imports: [
    APP_ROUTING,
    FormsModule,
    BrowserModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
