import { Component, OnInit , Input } from '@angular/core';
import { InfoService } from 'src/app/register/info.service';
import { InfoServicet } from 'src/app/register-teacher/info.service';
import { Student } from 'src/app/register/student';
import { Teacher } from 'src/app/register-teacher/teacher'
import { map } from 'rxjs/operators';
import { Class } from 'src/app/register-teacher/class'
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
  studentsC : Student = new Student();
  classes : Class = new Class();
  submit = false;
  ClassN =0;
  Key : string;


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

  slec(std:any){
    window.alert(std.Key);
  }

  slecT(tea:any){
    window.alert(tea.Key);
  }

  KeyAssign(Key1 : any ){
    this.Key = Key1.Key;
  }

  IntiClass(){
    this.submit=false;
    this.TeacherInfo.createClass(this.Key,this.classes);
  }

 

  CreateClasses(student : any){
    this.classes.ClassName = 'class'+ this.ClassN;
    this.classes.StudentID = student.ID;
    this.classes.StudentFn = student.FirstName;
    this.classes.StudentLn = student.LastName;
    
  }
  onSubmit(){
    this.submit =false;
    
  }
}
