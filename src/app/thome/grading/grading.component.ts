import { Component, OnInit , Input} from '@angular/core';
import { Class } from 'src/app/register-teacher/class';
import { InfoServicet } from 'src/app/register-teacher/info.service';
import { map } from 'rxjs/operators';
import { Grading } from 'src/app/register-teacher/grading';
@Component({
  selector: 'app-grading',
  templateUrl: './grading.component.html',
  styleUrls: ['./grading.component.css']
})
export class GradingComponent implements OnInit {
  @Input() class : Class;
  classes : any;
  user  : any;
  submit = false;
  Grade_type:string;
  Score:string;
  Outof: string;
  KeyS:any;
  val =[this.Grade_type , this.Score , this.Outof ];
  grades : Grading = new Grading();
  
  
  constructor( private teacherInfo:InfoServicet) { }

  ngOnInit() {
    this.user=  JSON.parse(localStorage.getItem('user'));
    this.getClassList();
  }
  getClassList(){
    this.teacherInfo.getClasses('WTOB2et4nHa8F1o6RxmF').snapshotChanges().pipe(map(changes =>
      changes.map(c =>
        ({ Key: c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
  ).subscribe( classes => { this.classes = classes})
  }

  grade(classS:any){
    this.KeyS= classS.Key;
    this.grades.GradType = classS.Grade_type;
    this.grades.Score = classS.Score;
    this.grades.Outof = classS.Outof;
    
    this.teacherInfo.Grade('WTOB2et4nHa8F1o6RxmF' ,this.KeyS, this.grades);
    
  }

  

  onSubmit(){
    this.submit = true;
    
  }

}
