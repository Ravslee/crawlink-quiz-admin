import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
@Injectable()
export class AuthService {

  constructor() { }

  public signIn(email,password) {
  
  return firebase.auth()
    .signInWithEmailAndPassword(email,password);

  }

  signOut(){
    firebase.auth()
    .signOut();
  }

}
