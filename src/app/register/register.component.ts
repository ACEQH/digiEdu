import { Component , OnInit ,Input } from '@angular/core';
import { Student} from './student';
import { InfoService } from './info.service';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
   student : Student = new Student();
   submit = false;
  constructor( private info : InfoService , private rout:Router) {

    }
     
  ngOnInit(){}

  newStudent(){
    this.submit=false;
    this.info.createStudent(this.student);
    this.student = new Student();
    
  }

  save(){
    this.info.createStudent(this.student);
    this.submit=false;
  }
  
  onSubmit(){
    this.submit =false;
    
  }



  

}
