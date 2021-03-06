import { Injectable ,NgZone} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument ,AngularFirestoreCollection } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { Router } from "@angular/router";
import { Parent } from './parent';
import { PS } from '../register-parent/ps';
@Injectable({
  providedIn: 'root'
})
export class InfoPService {

  
  private dbPath = '/Parents';
  private dbPath1 = '/Student';
  ParentsRef : AngularFirestoreCollection<Parent> = null;
  PstdRef : AngularFirestoreCollection<PS> = null;
  //PSref : Docume
  UID : any;
  ID : any;
  parentData:any;
  parent:Parent;
  ps:PS;
  
  constructor(private db: AngularFirestore , private  afAuth: AngularFireAuth,private router: Router ,private ngZone: NgZone) { 
    this.ParentsRef = this.db.collection(this.dbPath);
    
     /* this.afAuth.authState.subscribe(parent =>{
            if(parent){
              this.parentData=parent;
              localStorage.setItem('parent',JSON.stringify(this.parentData));
              JSON.parse(localStorage.getItem('parent'))
            }else{
              localStorage.setItem('parent',null);
              JSON.parse(localStorage.getItem('parent'));
            }
          })*/
   // this.PSref = db.list(this.dbPath+this.UID+this.dbPath1);
    
    //this.UID = db.database.ref(this.dbPath).key;
    //this.ID = db.list(this.dbPath+this.UID+this.dbPath1);

    
  }
  createParent(parent: Parent): void {
     this.afAuth.auth.createUserWithEmailAndPassword(parent.Email,parent.Password).then(user =>{

      this.ParentsRef.doc(user.user.uid).set({...parent}).catch((error)=>{
        window.alert(error.message);
      });
  });
    window.alert("Register success");
  // this.ID=this.PSref.push(ps).key
  }

  Link_Student(Key : string , ps : PS ){
    this.ParentsRef.doc(Key).collection(this.dbPath1).add({...ps}).catch((error)=>{
      window.alert(error.message);
    });

  

  }

  getClasses(Key : string ){
    this.ParentsRef.doc(Key).collection(this.dbPath1);
  }
 
  
  updateParent(ID: string, value: any): Promise<void> {
    return this.ParentsRef.doc(ID).update(value);
  }
 
  deleteParent(ID: string): Promise<void> {
    return this.ParentsRef.doc(ID).delete();
  }
 
  getParentList(): AngularFirestoreCollection<Parent> {
    return this.ParentsRef;
  }
 
  deleteAll(){
   return this.ParentsRef.get().subscribe(
    querySnapshot => {
      querySnapshot.forEach((doc) => {
        doc.ref.delete();
      });
 },
    error => {
      console.log('Error: ', error);
    });
  }
  


 ForgotPasswordP(passwordResetEmail) {
  return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
  .then(() => {
    window.alert('Password reset email sent, check your inbox.');
  }).catch((error) => {
    window.alert(error)
  })
}

SendVerificationMailP() {
  return this.afAuth.auth.currentUser.sendEmailVerification()
  .then(() => {
    this.router.navigate(['verify-email-address']);
  })
}

get isLoggedInP(): boolean {
  const user = JSON.parse(localStorage.getItem('parent'));
  return (user !== null && user.emailVerified !== false) ? true : false;
}

SignOutP() {
  return this.afAuth.auth.signOut().then(() => {
    localStorage.removeItem('parent');
    this.router.navigate(['login']);
  })
}

}
