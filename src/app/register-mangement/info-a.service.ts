import { Injectable ,NgZone} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';
import { Router } from "@angular/router";
import { Admin } from "./admin";
import { User } from  'firebase';

@Injectable({
  providedIn: 'root'
})
export class InfoAService {
  private dbPath = '/Admins';
  AdminsRef : AngularFireList<Admin> = null;
  AdminData : any;
  data:any;
  admin: Admin;
  user:User;
  constructor(private db: AngularFireDatabase , public  afAuth: AngularFireAuth,public router: Router ,public ngZone: NgZone) { 
    this.AdminsRef = db.list(this.dbPath);
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }
  createAdmin(admin: Admin): void {
    this.AdminsRef.push(admin).catch((error)=>{
      window.alert(error.message);
    });

     this.afAuth.auth.createUserWithEmailAndPassword(admin.Email,admin.Password).catch((error=>{
      window.alert(error.message);
    }));
    window.alert("Register success");
  }
 
  updateAdmin(ID: string, value: any): Promise<void> {
    return this.AdminsRef.update(ID,value);
  }
 
  deleteAdmin(ID: string): Promise<void> {
    return this.AdminsRef.remove(ID);
  }
 
  getAdminList(): AngularFireList<Admin> {
    return this.AdminsRef;
  }
 
  deleteAll() :Promise<void>{
   return this.AdminsRef.remove();
  }

  async SigninA(email , password){
    try {
      await  this.afAuth.auth.signInWithEmailAndPassword(email, password)
      this.router.navigate(['/admin-home']);
  } catch (e) {
      alert("Error!"  +  e.message);
  }
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
    return  user  !==  null;
}

async SignOutA() {
  await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
}


}
