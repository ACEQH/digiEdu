import { Component } from '@angular/core';
import { LoginHomeService } from 'src/app/shared/login-home.service'
import { LoginComponent } from 'src/app/login/login.component'
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
  logType :LoginComponent;

  constructor(private loginfo:LoginHomeService)
  {}
  login(){
      if(this.loginfo.isLoggedIn){
        if(this.logType.data.type=='Student'){
          this.flagS = true;
        }else if(this.logType.data.type=='Parent'){
          this.flagP = true;
        }else if(this.logType.data.type=='Teacher'){
          this.flagT = true;
        }else if(//this.logType.data.type=='Admin'
        localStorage.getItem!=null){
          this.flagA = true;
        }
      }else{
        this.flagA = false;
        this.flagP = false;
        this.flagT = false;
        this.flagS = false;
      }

      }
      
    
      
    
  
  }
  

