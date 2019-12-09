import { Injectable ,NgZone} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';
import { Router } from "@angular/router";
import {Student} from './student';
import { error } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private dbPath = '/Students';
  StudentsRef : AngularFireList<Student> = null;
  studentData : any;
  student: Student;
  constructor(private db: AngularFireDatabase , private  afAuth: AngularFireAuth,private router: Router ,private ngZone: NgZone) {
    this.StudentsRef = db.list(this.dbPath);
        this.afAuth.authState.subscribe(student =>{
            if(student){
              this.studentData=student;
              localStorage.setItem('student',JSON.stringify(this.studentData));
              JSON.parse(localStorage.getItem('student'))
            }else{
              localStorage.setItem('student',null);
              JSON.parse(localStorage.getItem('student'));
            }
          })
        }
  
 
  createStudent(student: Student): void {
    this.StudentsRef.push(student).catch((error)=>{
      window.alert(error.message);
    })

    ;
     this.afAuth.auth.createUserWithEmailAndPassword(student.Email,student.Password).catch((error=>{
      window.alert(error.message);
    }));
    window.alert("Register success");
  }
 
  updateStudent(ID: string, value: any): Promise<void> {
    return this.StudentsRef.update(ID,value);
  }
 
  deleteStudent(ID: string): Promise<void> {
    return this.StudentsRef.remove(ID);
  }
 
  getStudentList(): AngularFireList<Student> {
    return this.StudentsRef;
  }
 
  deleteAll() :Promise<void>{
   return this.StudentsRef.remove();
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
