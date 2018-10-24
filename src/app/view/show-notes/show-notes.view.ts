import { Component, OnInit } from '@angular/core';
import { AuthModel } from 'src/app/model/auth.model';

@Component({
  selector: 'app-show-notes',
  templateUrl: './show-notes.view.html',
  styleUrls: ['./show-notes.view.css']
})

export class ShowNotesComponent implements OnInit {

  constructor(public auth: AuthModel) { }

  ngOnInit() { }

  logout() {
    this.auth.logout();
  }

}
