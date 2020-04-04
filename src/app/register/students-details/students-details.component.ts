import { Component, OnInit , Input } from '@angular/core';
import { InfoService } from '../info.service';
import { Student } from '../student';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent implements OnInit {
  @Input() student : Student;
  students:any;
  sd: any[];
  Key:any;
  constructor( private studentSrvice:InfoService) {

   }

  ngOnInit() {
    this.getStudentList();
  }
  UpdateData(phoneNumber:string , level : string , password : string ){
    
    this.studentSrvice.updateStudent(this.student.Key , {PhoneNumber: phoneNumber, Level : level , Password : password}).catch(err => console.log(err));
  }

  DeleteStudent(){
    this.studentSrvice.deleteStudent(this.Key).catch(err => console.log(err));
    window.alert("Student was deleted");
  }
  getStudentList(){
    this.studentSrvice.getStudentList().snapshotChanges().pipe(map(changes =>
      changes.map(c =>
        ({ Key: c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
  ).subscribe( students => { this.students = students})
  }

  KeyAssign(Key1 : any ){
    this.Key = Key1.Key;
    this.DeleteStudent();
  }
  
}
