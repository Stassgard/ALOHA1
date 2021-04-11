import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isUserAuth!: boolean;

  constructor() { }

  get getIsUserOut(){
    return this.isUserAuth;
  }

  LogIn() {
    this.isUserAuth = true;
  }

  LogOut() {
    this.isUserAuth = false;
  }
}
