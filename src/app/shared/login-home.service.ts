import { Injectable , NgZone} from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginHomeService {
  userState: any;

  constructor(public afAuth: AngularFireAuth ,private router: Router ,private ngZone: NgZone ) { 
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userState = user;
        localStorage.setItem('user', JSON.stringify(this.userState));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  SigninS(email , password){
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
   .then((result) => {
     this.ngZone.run(() => {
       this.router.navigate(['/SHome']);
     });
   }).catch((error) => {
     window.alert(error.message)
   })
 }

 SigninP(email , password){
  this.afAuth.auth.signInWithEmailAndPassword(email, password)
 .then((result) => {
   this.ngZone.run(() => {
     this.router.navigate(['/PHome']);
   });
 }).catch((error) => {
   window.alert(error.message)
 })
}

SigninT(email , password){
  this.afAuth.auth.signInWithEmailAndPassword(email, password)
 .then((result) => {
   this.ngZone.run(() => {
     this.router.navigate(['/THome']);
   });
 }).catch((error) => {
   window.alert(error.message)
 })
}

SigninA(email , password){
  this.afAuth.auth.signInWithEmailAndPassword(email, password)
 .then((result) => {
   this.ngZone.run(() => {
     this.router.navigate(['/admin-home']);
   });
 }).catch((error) => {
   window.alert(error.message)
 })
}

get isLoggedIn(): boolean {
  const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
}

SignOut() {
  return this.afAuth.auth.signOut().then(() => {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  })
}

}
