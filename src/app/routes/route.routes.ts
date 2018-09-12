import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from '../components/auth/auth.component';
import { ShowNotesComponent } from '../components/show-notes/show-notes.component';

const route: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'show_notes', component: ShowNotesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'auth' }
];

export const APP_ROUTING = RouterModule.forRoot(route);
