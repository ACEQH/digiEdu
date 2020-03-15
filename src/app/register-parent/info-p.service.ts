import { Injectable ,NgZone} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from "@angular/fire/auth";
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
  ParentsRef : AngularFireList<Parent> = null;
  //PSref : Docume
  UID : any;
  ID : any;
  parentData:any;
  parent:Parent;
  
  constructor(private db: AngularFireDatabase , private  afAuth: AngularFireAuth,private router: Router ,private ngZone: NgZone) { 
    this.ParentsRef = db.list(this.dbPath);
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
    
    this.ParentsRef.push(parent).catch((error)=>{
      window.alert(error.message);
    });

    this.afAuth.auth.createUserWithEmailAndPassword(parent.Email,parent.Password).catch((error=>{
      window.alert(error.message);
    }));
    window.alert("Register success");
  // this.ID=this.PSref.push(ps).key
  }

  
  updateParent(ID: string, value: any): Promise<void> {
    return this.ParentsRef.update(ID,value);
  }
 
  deleteParent(ID: string): Promise<void> {
    return this.ParentsRef.remove(ID);
  }
 
  getParentList(): AngularFireList<Parent> {
    return this.ParentsRef;
  }
 
  deleteAll() : Promise<void>{
   return this.ParentsRef.remove();
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
