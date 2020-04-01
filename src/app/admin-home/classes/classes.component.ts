import { Component, OnInit , Input } from '@angular/core';
import { InfoService } from 'src/app/register/info.service';
import { InfoServicet } from 'src/app/register-teacher/info.service';
import { Student } from 'src/app/register/student';
import { Teacher } from 'src/app/register-teacher/teacher'
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  @Input() student : Student;
  @Input() teacher : Teacher;
  students : any;
  teachers : any; 

  constructor(private StudentInfo:InfoService , private TeacherInfo: InfoServicet) { 

  }

  ngOnInit() {
    this.getStudentList();
    this.getTeacherList();
  }

  getStudentList(){
    this.StudentInfo.getStudentList().snapshotChanges().pipe(map(changes =>
      changes.map(c =>
        ({ Key: c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
  ).subscribe( students => { this.students = students})
  }


  getTeacherList(){
    this.TeacherInfo.getTeacherList().snapshotChanges().pipe(map(changes =>
      changes.map(c =>
        ({ Key: c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
  ).subscribe( teachers => { this.teachers = teachers})
  }
/*StudentList(){

  this.StudentInfo.StudentList();
 
}*/


}
