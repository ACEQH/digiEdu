import { Component, OnInit ,Input} from '@angular/core';
import { InfoService } from 'src/app/register/info.service';
import { Student } from 'src/app/register/student';
import { map } from 'rxjs/operators';
import { InfoPService } from './info-p.service';
import {Parent} from './parent';
import { Router } from '@angular/router';
import { PS} from './ps';


@Component({
  selector: 'app-register-parent',
  templateUrl: './register-parent.component.html',
  styleUrls: ['./register-parent.component.css']
})
export class RegisterParentComponent implements OnInit {
  @Input() student : Student;
  students:any;
  ps:PS = new PS();
  parent : Parent = new Parent();
  submit = false;
  constructor(private infop:InfoPService , private router:Router , private studentSrvice:InfoService) { 

  }

  ngOnInit() {
    this.getStudentList();
  }

  onselect(student :Student){
    this.ps.SID= student.Email;
    this.ps.SFN= student.FirstName;
    this.ps.SLN= student.LastName;
    this.ps.SGD= student.Gender;
    this.ps.SLV= student.Level;
  }

  newParent(){
    this.submit=false;
    this.infop.createParent(this.parent );
    this.parent = new Parent();
  }

  save(){
    this.infop.createParent(this.parent );
    this.submit=false;
  }
  
  onSubmit(){
    this.submit = true;
    
  }

  studentDetails(){
    this.router.navigate(['link-p']);
  }

  getStudentList(){
    this.studentSrvice.getStudentList().snapshotChanges().pipe(map(changes =>
      changes.map(c =>
        ({ ID: c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
  ).subscribe( students => { this.students = students})
  }

  
}
