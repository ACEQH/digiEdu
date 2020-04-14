import { Injectable ,NgZone} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument , AngularFirestoreCollection } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { Router } from "@angular/router";
import { Teacher } from './teacher'
import { Student } from '../register/student';
import { Class } from 'src/app/register-teacher/class';
import { Grading } from 'src/app/register-teacher/grading';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class InfoServicet {
  techer:Teacher;
  class: Class;
  grade : Grading;
  private dbPath = '/Teachers';
  private subDbPath = '/Classes'
  TeacherData:any;
  TeachersRef : AngularFirestoreCollection<Teacher|Class> = null;
  ClassesRef : AngularFirestoreCollection<Class> = null;
  GradesRef : AngularFirestoreCollection<Grading> = null;
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
     this.afAuth.auth.createUserWithEmailAndPassword(teacher.Email,teacher.Password).then(user =>{

      this.TeachersRef.doc(user.user.uid).set({...teacher}).catch((error)=>{
        window.alert(error.message);
      });
  });
    window.alert("Register success");
  }

  createClass(Key : string , classes : Class ){
    this.TeachersRef.doc(Key).collection(this.subDbPath).doc(Key).collection('students').add({...classes}).catch((error)=>{
      window.alert(error.message);
    });

   

  }

  Grade(Key : string, KeyS :string, grade:Grading) {
   this.TeachersRef.doc(Key).collection(this.subDbPath).doc(Key).collection('students').doc(KeyS).collection('grade').add({...grade});
  }

  getGrade(Key : string , Keys :string): AngularFirestoreCollection<Grading> {
   return this.TeachersRef.doc(Key).collection(this.subDbPath).doc(Key).collection('students').doc(Keys).collection('grade');
  }

  getClasses(Key : string ): AngularFirestoreCollection<Class>{
    return this.TeachersRef.doc(Key).collection(this.subDbPath).doc(Key).collection('students');
  }
 
  updateTeacher(ID: string, value: any): Promise<void> {
    return this.TeachersRef.doc(ID).update(value);
  }

  updategrading( value: any) {
    return this.TeachersRef.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.update(value);
        });
   },
      error => {
        console.log('Error: ', error);
      });;
  }
 
  deleteTeacher(ID: string): Promise<void> {
    return this.TeachersRef.doc(ID).delete();
  }
 
  getTeacherList(): AngularFirestoreCollection<Teacher|Class> {
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
