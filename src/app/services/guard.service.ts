import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private auth: AuthService,
              private route: Router) { }

  canActivate() {
    if(this.auth.isAuthenticated()) {
      return true
    } else {
      alert('You must be authenticated to access this page !')
      this.route.navigate(['home'])
      return false
    }
  }
}
