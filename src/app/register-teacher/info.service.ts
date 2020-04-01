import { Injectable ,NgZone} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument , AngularFirestoreCollection } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { Router } from "@angular/router";
import {Teacher} from './teacher'

@Injectable({
  providedIn: 'root'
})
export class InfoServicet {
  techer:Teacher;
  private dbPath = '/Teachers';
  TeacherData:any;
  TeachersRef : AngularFirestoreCollection<Teacher> = null;
  constructor(private db: AngularFirestore , private  afAuth: AngularFireAuth,private router: Router ,private ngZone: NgZone) {
    this.TeachersRef = this.db.collection(this.dbPath);
        /*this.afAuth.authState.subscribe(teacher =>{
            if(teacher){
              this.TeacherData=teacher;
              localStorage.setItem('teacher',JSON.stringify(this.TeacherData));
              JSON.parse(localStorage.getItem('teacher'))
            }else{
              localStorage.setItem('teacher',null);
              JSON.parse(localStorage.getItem('teacher'));
            }
          })*/
   }
  
 
  createTeacher(teacher: Teacher): void {
    
    this.TeachersRef.add({...teacher}).catch((error)=>{
      window.alert(error.message);
    });
    this.afAuth.auth.createUserWithEmailAndPassword(teacher.Email,teacher.Password).catch((error=>{
      window.alert(error.message);
    }));
    window.alert("Register success");
  }
 
  updateTeacher(ID: string, value: any): Promise<void> {
    return this.TeachersRef.doc(ID).update(value);
  }
 
  deleteTeacher(ID: string): Promise<void> {
    return this.TeachersRef.doc(ID).delete();
  }
 
  getTeacherList(): AngularFirestoreCollection<Teacher> {
    return this.TeachersRef;
  }
 
  deleteAll() {
    this.TeachersRef.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
   },
      error => {
        console.log('Error: ', error);
      });
}



ForgotPasswordT(passwordResetEmail) {
  return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
  .then(() => {
    window.alert('Password reset email sent, check your inbox.');
  }).catch((error) => {
    window.alert(error)
  })
}

SendVerificationMailT() {
  return this.afAuth.auth.currentUser.sendEmailVerification()
  .then(() => {
    this.router.navigate(['verify-email-address']);
  })
}

get isLoggedInT(): boolean {
  const user = JSON.parse(localStorage.getItem('teacher'));
  return (user !== null && user.emailVerified !== false) ? true : false;
}

SignOutT() {
  return this.afAuth.auth.signOut().then(() => {
    localStorage.removeItem('teacher');
    this.router.navigate(['login']);
  })
}

}
