import { Component } from '@angular/core';
import { InfoPService } from './register-parent/info-p.service';
import { InfoAService } from './register-mangement/info-a.service';
import { InfoServicet} from './register-teacher/info.service';
import { InfoService} from './register/info.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'DigitalEducation';

  flagA:boolean;
  flagP:boolean;
  flagS:boolean;
  flagT:boolean;

  constructor(public  infoS: InfoService,public infoP : InfoPService,public infoT : InfoServicet,public infoA : InfoAService)
  {}
  loginA(){
        this.flagA= this.infoA.isLoggedInA;
      }
      loginS(){
          this.flagS= this.infoS.isLoggedInS;
      }
      loginP(){
          this.flagP= this.infoP.isLoggedInP;
      }
      loginT(){
        this.flagT= this.infoT.isLoggedInT;
      }
    
      logoutA(){
        this.infoA.SignOutA;
      }
    
      logoutP(){
        this.infoP.SignOutP;
      }
    
      logoutS(){
        this.infoS.SignOutS;
      }
    
      logoutT(){
        this.infoT.SignOutT;
      }
    
  
  }
  

