import { AuthComponent } from './auth.controller';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.controller';
import { ShowNotesComponent } from './show-notes.controller';

const route: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'show_notes', component: ShowNotesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'auth' }
];

export const APP_ROUTING = RouterModule.forRoot(route);
