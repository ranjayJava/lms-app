import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    //console.log('before ' + this.isUserLoggedIn());
    if(username==="ranjay199" && password === 'test123' || username=="ranjayAdmin" && password=='admin123') {
      sessionStorage.setItem('authenticatedUser', username);
      console.log(username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  isAdminLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return (user === "ranjayAdmin")
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }

}

