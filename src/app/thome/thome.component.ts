import { Component, OnInit } from '@angular/core';
import { InfoServicet} from '../register-teacher/info.service';
@Component({
  selector: 'app-thome',
  templateUrl: './thome.component.html',
  styleUrls: ['./thome.component.css']
})
export class THomeComponent implements OnInit {

  constructor(private infoT : InfoServicet) { }

  ngOnInit() {
  }

  logout(){
    this.infoT.SignOutT;
  }

}
