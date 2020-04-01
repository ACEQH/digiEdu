import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InfoService} from '../register/info.service';
import { LoginHomeService } from 'src/app/shared/login-home.service'
@Component({
  selector: 'app-shome',
  templateUrl: './shome.component.html',
  styleUrls: ['./shome.component.css']
})
export class SHomeComponent implements OnInit {

  constructor(private  infoS: InfoService , private rt:Router ,private Logininfo:LoginHomeService) { }

  ngOnInit() {
  }
  logoutS(){
    this.Logininfo.SignOut();
    this.rt.navigate(['/login']);

  }
}
