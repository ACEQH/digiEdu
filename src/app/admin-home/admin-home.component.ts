import { Component, OnInit } from '@angular/core';
import { InfoPService } from '../register-parent/info-p.service';
import { InfoAService } from '../register-mangement/info-a.service';
import { InfoServicet} from '../register-teacher/info.service';
import { InfoService} from '../register/info.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  isLoggedIn$: boolean;

  constructor(private  infoS: InfoService,private infoP : InfoPService,private infoT : InfoServicet,public infoA : InfoAService) 
  { }

  ngOnInit() {
    
  }

  logout(){
    this.infoA.SignOutA;
  }

  loginA():boolean{
        if(this.infoA.isLoggedInA){
          return true;
        }
        return false;
      }

}
