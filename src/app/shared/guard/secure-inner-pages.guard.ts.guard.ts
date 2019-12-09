import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { InfoService } from 'src/app/register/info.service';
import { InfoAService } from 'src/app/register-mangement/info-a.service';
import { InfoPService } from 'src/app/register-parent/info-p.service';
import { InfoServicet } from 'src/app/register-teacher/info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class SecureInnerPagesGuard implements CanActivate {

  constructor(
    private infoS:InfoService,private infoP : InfoPService,private infoT : InfoServicet,private infoA : InfoAService,private router: Router)
    { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
     if(this.infoS.isLoggedInS){
      window.alert("You are not allowed to access this URL!");
      this.router.navigate(['login']);
     }else if(this.infoP.isLoggedInP){
      window.alert("You are not allowed to access this URL!");
      this.router.navigate(['login']);
     }else if(this.infoT.isLoggedInT){
      window.alert("You are not allowed to access this URL!");
      this.router.navigate(['login']);
     }else if(this.infoA.isLoggedInA){
      window.alert("You are not allowed to access this URL!");
      this.router.navigate(['login']);
     }
    return true;
  }
  
}

