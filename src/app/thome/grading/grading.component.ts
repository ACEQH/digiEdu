import { Component, OnInit , Input} from '@angular/core';
import { Class } from 'src/app/register-teacher/class';
import { InfoServicet } from 'src/app/register-teacher/info.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-grading',
  templateUrl: './grading.component.html',
  styleUrls: ['./grading.component.css']
})
export class GradingComponent implements OnInit {
  @Input() class : Class;
  classes : any;
  user  : any;
  Quiz_1 : number;
  Quiz_2 : number;
  Homework_1 : number;
  Homework_2 : number;
  Mid_term : number;
  Final : number;
  KeyS:any;
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
    this.KeyS= classS.classKey
    if(this.Quiz_1!==0){
    this.teacherInfo.Grade('WTOB2et4nHa8F1o6RxmF' ,'43HhRIdwj7WZBpPWHMSy', 'Quiz_1'+this.Quiz_1);
  } if(this.Quiz_2 !==0){
    this.teacherInfo.Grade('WTOB2et4nHa8F1o6RxmF' ,this.KeyS, 'Quiz_1'+this.Quiz_2);
  } if(this.Homework_1 !==0){
    this.teacherInfo.Grade('WTOB2et4nHa8F1o6RxmF' ,this.KeyS, 'Quiz_1'+this.Homework_1);
  } if(this.Homework_2 !==0){
    this.teacherInfo.Grade('WTOB2et4nHa8F1o6RxmF' ,this.KeyS, 'Quiz_1'+this.Homework_2);
  } if(this.Mid_term !==0){
    this.teacherInfo.Grade('WTOB2et4nHa8F1o6RxmF' ,this.KeyS, 'Quiz_1'+this.Mid_term);
  } if(this.Final !==0){
    this.teacherInfo.Grade('WTOB2et4nHa8F1o6RxmF' ,this.KeyS, 'Quiz_1'+this.Final);
  }
  }

}
