import { Component, OnInit } from '@angular/core';
import { InfoServicet} from '../register-teacher/info.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-thome',
  templateUrl: './thome.component.html',
  styleUrls: ['./thome.component.css']
})
export class THomeComponent implements OnInit {

  constructor(private infoT : InfoServicet , private rt:Router) { }

  ngOnInit( ) {
  }
  logoutT(){
    this.infoT.SignOutT;
    this.rt.navigate(['/login']);

  }
  logout(){
    this.infoT.SignOutT;
  }

}
