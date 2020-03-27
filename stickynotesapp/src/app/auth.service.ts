import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth, database } from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 public isLoggedIn;
  redirectUrl: string;
  
  constructor(public afAuth: AngularFireAuth) { 
  //  afAuth.authState.subscribe((auth)=>{
  //    this.isLoggedIn=auth;
  //  });
  }


  // Sign in with Google
 async GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }  
  async Logout(){
    this.isLoggedIn=false;
    await this.afAuth.auth.signOut().then(() => {
    console.log(this.isLoggedIn);
    this.afAuth.authState.subscribe(data=>{console.log(data)});
    });
  }
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!');
        this.isLoggedIn=true;
        console.log(this.isLoggedIn);
    }).catch((error) => {
        console.log(error)
    })
  }
}
