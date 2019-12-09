import { Component, OnInit } from '@angular/core';
import { InfoPService } from '../register-parent/info-p.service';
import { InfoAService } from '../register-mangement/info-a.service';
import { InfoServicet} from '../register-teacher/info.service';
import { InfoService} from '../register/info.service';
import { Data } from '../shared/data';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data:Data = new Data();
  submit= false;

  constructor(private  infoS: InfoService,private infoP : InfoPService,private infoT : InfoServicet,private infoA : InfoAService) 
  { }

  ngOnInit() {
  }

  Login(){
    this.submit= false;
    if(this.data.type == 'Student'){
      this.infoS.SigninS(this.data.Email,this.data.Password);
    }else if(this.data.type == 'Parent'){
      this.infoP.SigninP(this.data.Email,this.data.Password);
    }else if(this.data.type== 'Teacher'){
      this.infoT.SigninT(this.data.Email,this.data.Password);
    }else if(this.data.type == 'Admin'){
      this.infoA.SigninA(this.data.Email,this.data.Password);
    }else{
      window.alert('please select user type ');
    }

  }

  onSubmit(){
    this.submit =false;
    
  }

}
