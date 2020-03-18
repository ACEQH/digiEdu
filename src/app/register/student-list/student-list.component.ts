import { Component, OnInit, Input} from '@angular/core';
import { InfoService } from '../info.service';
import { map } from 'rxjs/operators';
import { Student } from '../student';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: any ;
  @Input() student : Student;
  constructor(private studentInfo : InfoService) { 

  }


  ngOnInit() {
    this.getStudentList();
  }
  UpdateData(PhoneNumber:string , Level : string , Password : string ){
    this.studentInfo.updateStudent(this.student.ID , {PhoneNumber , Level , Password } ).catch(err => console.log(err));
  }

  DeleteStudent(){
    this.studentInfo.deleteStudent(this.student.ID).catch(err => console.log(err));
  }

  getStudentList(){
    this.studentInfo.getStudentList().snapshotChanges().pipe(map(changes =>
      changes.map(c =>
        ({ ID: c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
  ).subscribe( students => { this.students = students})
  }

  DeleteStudents(){
    this.studentInfo.deleteAll();
  }
}
