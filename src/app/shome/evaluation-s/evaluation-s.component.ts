import { Component, OnInit , Input} from '@angular/core';
import { InfoServicet } from 'src/app/register-teacher/info.service';
import { map } from 'rxjs/operators';
import { CommenicationService } from 'src/app/shared/commenication.service';
import { Teacher } from 'src/app/register-teacher/teacher';
import { Evaluation } from 'src/app/register-teacher/evaluation';
@Component({
  selector: 'app-evaluation-s',
  templateUrl: './evaluation-s.component.html',
  styleUrls: ['./evaluation-s.component.css']
})
export class EvaluationSComponent implements OnInit {
  @Input() teacher : Teacher;
  evaluation : Evaluation = new Evaluation();
  teachers : any;
  user  : any;
  submit = false;
  KeyS:any;
  constructor(private teacherInfo:InfoServicet , private mesinfo : CommenicationService) {

   }

  ngOnInit() {
    this.user=  JSON.parse(localStorage.getItem('user'));
    this.getTeacherList();
  }

  getTeacherList(){
    this.teacherInfo.getTeacherList().snapshotChanges().pipe(map(changes =>
      changes.map(c =>
        ({ Key: c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
  ).subscribe( teachers => { this.teachers = teachers})
  }

  sendMessage(){
    
    this.submit=false;
    this.mesinfo.createEvaloutin('WTOB2et4nHa8F1o6RxmF' , this.evaluation);
    window.alert('The evaluation was sent seccessfully')
  }
}
