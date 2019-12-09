import { Component, OnInit } from '@angular/core';
import {InfoAService } from './info-a.service';
import {Admin} from './admin';
@Component({
  selector: 'app-register-mangement',
  templateUrl: './register-mangement.component.html',
  styleUrls: ['./register-mangement.component.css']
})
export class RegisterMangementComponent implements OnInit {
  admin : Admin = new Admin();
  submit = false;
  constructor( private infoA : InfoAService) { }

  ngOnInit() {
  }

  newAdmin(){
    this.submit=false;
    this.infoA.createStudent(this.admin);
    this.admin = new Admin();
    
  }

  onSubmit(){
    this.submit =false;
    
  }
}
