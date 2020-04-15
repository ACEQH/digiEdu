import { Component, OnInit , Input} from '@angular/core';
import { InfoPService } from 'src/app/register-parent/info-p.service';
import { InfoServicet } from 'src/app/register-teacher/info.service';
import { Class } from 'src/app/register-teacher/class';
import { Parent } from 'src/app/register-parent/parent';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  @Input() class : Class;
  @Input() parent : Parent;
  classes : any;
  parents : any;
  constructor(private teacherInfo:InfoServicet ,private ParentInfo: InfoPService) { }

  ngOnInit() {
    this.getParentList();
  }


  getClassList(){
    this.teacherInfo.getClasses('WTOB2et4nHa8F1o6RxmF').snapshotChanges().pipe(map(changes =>
      changes.map(c =>
        ({ Key: c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
  ).subscribe( classes => { this.classes = classes})
  }

  getParentList(){
    this.ParentInfo.getParentList().snapshotChanges().pipe(map(changes =>
      changes.map(c =>
        ({ Key: c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
  ).subscribe( parents => { this.parents = parents})
  }

}
