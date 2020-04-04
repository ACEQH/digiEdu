import { Component, OnInit , Input } from '@angular/core';
import { InfoService } from 'src/app/register/info.service';
import { InfoPService } from 'src/app/register-parent/info-p.service';
import { Student } from 'src/app/register/student';
import { Parent } from 'src/app/register-parent/parent';
import { PS } from 'src/app/register-parent/ps';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-link-parent',
  templateUrl: './link-parent.component.html',
  styleUrls: ['./link-parent.component.css']
})
export class LinkParentComponent implements OnInit {
  @Input() student : Student;
  @Input() parent : Parent;
  ps : PS = new PS();
  std: any[];
  c = 0;
  students : any;
  parents : any;
  submit = false;
  Key : string;
  constructor(private StudentInfo:InfoService , private ParentInfo: InfoPService) { }

  ngOnInit() {
    this.getStudentList();
    this.getParentList();
  }

  getParentList(){
    this.ParentInfo.getParentList().snapshotChanges().pipe(map(changes =>
      changes.map(c =>
        ({ Key: c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
  ).subscribe( parents => { this.parents = parents})
  }


  getStudentList(){
    this.StudentInfo.getStudentList().snapshotChanges().pipe(map(changes =>
      changes.map(c =>
        ({ Key: c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
  ).subscribe( students => { this.students = students})
  }

  end(){
    window.alert("Student was linked")
  }

  Link_std(){
    this.ParentInfo.Link_Student(this.Key , this.ps);
  }

  AssignStd(std : any){
    this.ps.SID = std.ID;
    this.ps.SFN = std.FirstName;
    this.ps.SLN = std.LastName;
    this.ps.SLV = std.Level;
    this.ps.SGD = std.Gender;
    //this.std[this.c] = this.std.push(std);
    //this.c++;
    this.Link_std();
    this.ps = new PS();

  }


  KeyAssign(Key1 : any ){
    this.Key = Key1.Key;
  }


  onSubmit(){
    this.submit =false;
    
  }


}
