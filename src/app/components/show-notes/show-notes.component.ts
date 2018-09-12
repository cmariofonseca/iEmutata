import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-show-notes',
  templateUrl: './show-notes.component.html',
  styleUrls: ['./show-notes.component.css']
})

export class ShowNotesComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() { }

  logout() {
    this.authService.logout();
  }

}
