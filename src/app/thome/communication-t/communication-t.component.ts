import { Component, OnInit , Input} from '@angular/core';
import { Class } from 'src/app/register-teacher/class';
import { InfoServicet } from 'src/app/register-teacher/info.service';
import { map } from 'rxjs/operators';
import { Commenication } from 'src/app/shared/commenication';
import { CommenicationService } from 'src/app/shared/commenication.service';
@Component({
  selector: 'app-communication-t',
  templateUrl: './communication-t.component.html',
  styleUrls: ['./communication-t.component.css']
})
export class CommunicationTComponent implements OnInit {
  @Input() class : Class;
  classes : any;
  user  : any;
  submit = false;
  KeyS:any;
  Message :Commenication = new Commenication();
  constructor(private teacherInfo:InfoServicet , private mesinfo : CommenicationService) { 

  }

  ngOnInit() {
    this.user=  JSON.parse(localStorage.getItem('user'));
    this.getClassList();
  }

  sendMessage(){
    
    this.submit=false;
    this.mesinfo.createMessage(this.KeyS , this.Message);
  }

  KeyAssign(classS :any){
    this.KeyS = classS.Key;
    this.Message.Key = this.KeyS;
  }

  getClassList(){
    this.teacherInfo.getClasses('WTOB2et4nHa8F1o6RxmF').snapshotChanges().pipe(map(changes =>
      changes.map(c =>
        ({ Key: c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
  ).subscribe( classes => { this.classes = classes})
  }

  onSubmit(){
    this.submit = true;
    
  }

}
