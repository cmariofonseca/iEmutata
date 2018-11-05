import { AuthComponent } from './auth.controller';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.controller';
import { ShowNotesComponent } from './show-notes.controller';
import { EntryNotesComponent } from './entry-notes.controller';

const route: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'show_notes', component: ShowNotesComponent },
  { path: 'entry_notes', component: EntryNotesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'auth' }
];

export const APP_ROUTING = RouterModule.forRoot(route);
