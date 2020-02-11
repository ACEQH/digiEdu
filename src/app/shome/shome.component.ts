import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InfoService} from '../register/info.service';
@Component({
  selector: 'app-shome',
  templateUrl: './shome.component.html',
  styleUrls: ['./shome.component.css']
})
export class SHomeComponent implements OnInit {

  constructor(private  infoS: InfoService , private rt:Router) { }

  ngOnInit() {
  }
  logoutS(){
    this.infoS.SignOutS;
    this.rt.navigate(['/login']);

  }
}
