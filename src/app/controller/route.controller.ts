import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from '../view/auth/auth.view';
import { RegisterComponent } from '../view/register/register.view';
import { ShowNotesComponent } from '../view/show-notes/show-notes.view';

const route: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'show_notes', component: ShowNotesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'auth' }
];

export const APP_ROUTING = RouterModule.forRoot(route);
