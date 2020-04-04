import { Injectable , NgZone} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument , AngularFirestoreCollection } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import {Router} from '@angular/router';
import { Admin } from './admin';
import { error } from '@angular/compiler/src/util';
import {Student} from '../register/student';
@Injectable({
  providedIn: 'root'
})
export class InfoAService {
  private dbPath = '/Admins';
  AdminsRef: AngularFirestoreCollection<Admin> = null;
  AdminData: any;
  admin: Admin;
  constructor(private db: AngularFirestore , public  afAuth: AngularFireAuth, private router: Router ,private ngZone: NgZone) {
    this.AdminsRef = this.db.collection(this.dbPath);
    /*this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })*/
  }
  createAdmin(admin: Admin): void {
     this.afAuth.auth.createUserWithEmailAndPassword(admin.Email,admin.Password).then(user =>{

      this.AdminsRef.doc(user.user.uid).set({...admin}).catch((error)=>{
        window.alert(error.message);
      });
  });
    window.alert("Register success");
  }

  updateAdmin(ID: string, value: any): Promise<void> {
    return this.AdminsRef.doc(ID).update(value);
  }

  deleteAdmin(ID: string): Promise<void> {
    return this.AdminsRef.doc(ID).delete();
  }

  getAdminList(): AngularFirestoreCollection<Admin> {
    return this.AdminsRef;
  }

  deleteAll(){
   return this.AdminsRef.get().subscribe(
     querySnapshot => {
       querySnapshot.forEach((doc) => {
         doc.ref.delete();
       });
  },
     error => {
       console.log('Error: ', error);
     });
  }


 ForgotPasswordA(passwordResetEmail) {
  return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
  .then(() => {
    window.alert('Password reset email sent, check your inbox.');
  }).catch((error) => {
    window.alert(error)
  })
}

SendVerificationMailA() {
  return this.afAuth.auth.currentUser.sendEmailVerification()
  .then(() => {
    this.router.navigate(['verify-email-address']);
  })
}

get isLoggedInA(): boolean {
  const  user  =  JSON.parse(localStorage.getItem('user'));
  return (user !== null && user.emailVerified !== false) ? true : false;
}

async SignOutA() {
  await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
}


}
