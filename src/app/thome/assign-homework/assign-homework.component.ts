import { Component, OnInit, Input } from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable} from 'rxjs';
import { Class } from 'src/app/register-teacher/class';
import { InfoServicet } from 'src/app/register-teacher/info.service';
import { map } from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';


@Component({
  selector: 'app-assign-homework',
  templateUrl: './assign-homework.component.html',
  styleUrls: ['./assign-homework.component.css']

})
export class AssignHomeworkComponent implements OnInit {
  @Input() class : Class;
  classes : any;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadURL: Observable<string>;
  fileName: any;
  fileProgress(fileInput: any) {
    const file = fileInput.target.files[0];
    this.fileName = file.name;
    console.log(this.fileName);
  }
  constructor(private storage: AngularFireStorage, private db: AngularFirestore, private teacherInfo:InfoServicet) { }
  upload(event) {
  const file = event.target.files[0];
  const filePath = 'homework';
  let ref = this.storage.ref(filePath);
  const taask = ref.put(file);
  ref = this.storage.ref('users/davideast.jpg');
  this.downloadURL = ref.getDownloadURL();
  const task = ref.put(file, { customMetadata: { blah: 'blah' } });

}
  ngOnInit() {
    this.downloadURL = this.storage.ref('/users/davideast.png').getDownloadURL();
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
  click() {
    window.alert('The homework was uploaded successfully');
  }

}
