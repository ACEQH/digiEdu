import { Component, OnInit , Input } from '@angular/core';
import { InfoServicet } from 'src/app/register-teacher/info.service';
import { Teacher } from 'src/app/register-teacher/teacher'
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-open-grading',
  templateUrl: './open-grading.component.html',
  styleUrls: ['./open-grading.component.css']
})
export class OpenGradingComponent implements OnInit {
  @Input() teacher : Teacher;
  teachers : any;
  constructor(private TeacherInfo: InfoServicet) {

   }

  ngOnInit() {
    this.getTeacherList();
  }
  getTeacherList(){
    this.TeacherInfo.getTeacherList().snapshotChanges().pipe(map(changes =>
      changes.map(c =>
        ({ Key: c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
  ).subscribe( teachers => { this.teachers = teachers})
  }

  updateGrading(isActive: boolean) {
    this.TeacherInfo
      .updategrading({ Grading: isActive });
      
  }
}
