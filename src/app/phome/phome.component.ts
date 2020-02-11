import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InfoPService } from '../register-parent/info-p.service';
@Component({
  selector: 'app-phome',
  templateUrl: './phome.component.html',
  styleUrls: ['./phome.component.css']
})
export class PHomeComponent implements OnInit {

  constructor(private infoP : InfoPService , private rt:Router) { }

  ngOnInit() {
  }

  logoutP(){
    this.infoP.SignOutP;
    this.rt.navigate(['/login']);

  }
}
