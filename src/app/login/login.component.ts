import { Component, OnInit } from '@angular/core';
import { LoginHomeService } from 'src/app/shared/login-home.service'
import { Data } from '../shared/data';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data:Data = new Data();
  submit= false;

  constructor(private loginfo:LoginHomeService) 
  { }

  ngOnInit() {
  }

  Login(){
    this.submit= false;
    if(this.data.type == 'Student'){
      this.loginfo.SigninS(this.data.Email,this.data.Password);
    }else if(this.data.type == 'Parent'){
      this.loginfo.SigninP(this.data.Email,this.data.Password);
    }else if(this.data.type== 'Teacher'){
      this.loginfo.SigninT(this.data.Email,this.data.Password);
    }else if(this.data.type == 'Admin'){
      this.loginfo.SigninA(this.data.Email,this.data.Password);
    }else{
      window.alert('please select user type ');
    }

  }

  onSubmit(){
    this.submit =false;
    
  }

}
