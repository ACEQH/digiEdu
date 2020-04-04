import { Component, OnInit } from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable} from 'rxjs';


@Component({
  selector: 'app-assign-homework',
  templateUrl: './assign-homework.component.html',
  styleUrls: ['./assign-homework.component.css']

})
export class AssignHomeworkComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadURL: Observable<string>;
  fileName: any;
  fileProgress(fileInput: any) {
    let file = fileInput.target.files[0];
    this.fileName = file.name;
    console.log(this.fileName);
  }
  constructor(private afStorage: AngularFireStorage) { }
upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.downloadURL = this.task.getdownloadURL();

}
  ngOnInit() {
  }

}
