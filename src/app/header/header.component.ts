import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // isAuthenticated: boolean
  // _avatar: string

  constructor(public auth: AuthService) { }

  ngOnInit() {
    // this.isAuthenticated = this.auth.isAuthenticated()
    // this._avatar = localStorage.getItem('avatar') ? localStorage.getItem('avatar') : ""
  }

  // logout() {
  //   this.auth.logout()
  // }
  // login() {
  //   this.auth.login()
  // }


}
