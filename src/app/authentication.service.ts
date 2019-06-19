import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first, take } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {  
  
  user;  
  constructor(public afAuth: AngularFireAuth) {    
    this.afAuth.authState.subscribe(userdata => {
      this.user = userdata;
      console.log(this.user); 
    });    
  }



  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
