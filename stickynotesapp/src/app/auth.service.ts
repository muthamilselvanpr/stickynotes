import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean=false;
  redirectUrl: string;
  
  constructor(public afAuth: AngularFireAuth) { 
   
if(this.GoogleAuth){
  this.isLoggedIn=true;
}
  }


  // Sign in with Google
 async GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }  
  async Logout(){
    await this.afAuth.auth.signOut();
}
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error)
    })
  }
}
