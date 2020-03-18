import { Injectable ,NgZone} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument ,AngularFirestoreCollection } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { Router } from "@angular/router";
import {Student} from './student';
import { error } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private dbPath = '/Students';
  StudentsRef : AngularFirestoreCollection<Student> = null;
  studentData : any;
  student: Student;
  constructor(private db: AngularFirestore , private  afAuth: AngularFireAuth,private router: Router ,private ngZone: NgZone ) {
    this.StudentsRef =this.db.collection(this.dbPath);
        /*this.afAuth.authState.subscribe(student =>{
            if(student){
              this.studentData=student;
              localStorage.setItem('student',JSON.stringify(this.studentData));
              JSON.parse(localStorage.getItem('student'))
            }else{
              localStorage.setItem('student',null);
              JSON.parse(localStorage.getItem('student'));
            }
          })*/
        }
  
 
  createStudent(student: Student): void {
    this.StudentsRef.add({...student}).catch((error)=>{
      window.alert(error.message);
    })

    ;
     this.afAuth.auth.createUserWithEmailAndPassword(student.Email,student.Password).catch((error=>{
      window.alert(error.message);
    }));
    window.alert("Register success");
  }
 
  updateStudent(ID: string, value: any): Promise<void> {
    return this.StudentsRef.doc(ID).update(value);
  }
 
  deleteStudent(ID: string): Promise<void> {
    return this.StudentsRef.doc(ID).delete();
  }
 
  getStudentList(): AngularFirestoreCollection<Student> {
    return this.StudentsRef;
  }
 
  deleteAll() {
    this.StudentsRef.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      },
      error => {
        console.log('Error: ', error);
      });
  }

  
  
  ForgotPasswordS(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  SendVerificationMailS() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
    .then(() => {
      this.router.navigate(['verify-email-address']);
    })
  }

  get isLoggedInS(): boolean {
    const user = JSON.parse(localStorage.getItem('student'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

 
  SignOutS() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('student');
      this.router.navigate(['login']);
    })
  }

}
