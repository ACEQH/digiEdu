import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-homework',
  templateUrl: './assign-homework.component.html',
  styleUrls: ['./assign-homework.component.css']

})
export class AssignHomeworkComponent implements OnInit {
  fileName: any;
  fileProgress(fileInput: any) {
    let file = fileInput.target.files[0];
    this.fileName = file.name;
    console.log(this.fileName)
  }
  constructor() { }

  ngOnInit() {
  }

}
