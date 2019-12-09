import { Component, OnInit } from '@angular/core';
import {InfoServicet} from './info.service';
import {Teacher} from './teacher';
@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css']
})
export class RegisterTeacherComponent implements OnInit {
  teacher : Teacher = new Teacher();
  submit = false;
  constructor(private info:InfoServicet) { 

  }

  ngOnInit() {
  }

  newTeacher(){
    this.submit=false;
    this.info.createTeacher(this.teacher);
    this.teacher = new Teacher();
  }

  save(){
    this.info.createTeacher(this.teacher);
    this.submit=false;
  }
  
  onSubmit(){
    this.submit = true;
    
  }

}
