import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { AngularFirestore , FirestoreSettingsToken } from '@angular/fire/firestore';
import { InfoService} from './register/info.service';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { InfoServicet} from './register-teacher/info.service';
import { RegisterParentComponent } from './register-parent/register-parent.component';
import { RegisterMangementComponent } from './register-mangement/register-mangement.component';
import { InfoPService } from './register-parent/info-p.service';
import { InfoAService } from './register-mangement/info-a.service';
import { StudentsDetailsComponent } from './register/students-details/students-details.component';
import { StudentListComponent } from './register/student-list/student-list.component';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { PHomeComponent } from './phome/phome.component';
import { SHomeComponent } from './shome/shome.component';
import { THomeComponent } from './thome/thome.component';
import { LoginComponent } from './login/login.component';
import { ComplaintAComponent } from './admin-home/complaint/complaint.component';
import { EvaluationListComponent } from './admin-home/evaluation-list/evaluation-list.component';
import { CommunicationListComponent } from './admin-home/communication-list/communication-list.component';
import { OpenGradingComponent } from './admin-home/open-grading/open-grading.component';
import { ContactUsComponent } from './admin-home/contact-us/contact-us.component';
import { AboutUsComponent } from './admin-home/about-us/about-us.component';
import { StudentGradeComponent } from './phome/student-grade/student-grade.component';
import { EvaluationPComponent } from './phome/evaluation-p/evaluation-p.component';
import { CommunicationPComponent } from './phome/communication-p/communication-p.component';
import { ComplaintComponent } from './phome/complaint/complaint.component'
import { GradeComponent } from './shome/grade/grade.component';
import { HomeworkComponent } from './shome/homework/homework.component';
import { EvaluationSComponent } from './shome/evaluation-s/evaluation-s.component';
import { CommunicationSComponent } from './shome/communication-s/communication-s.component';
import { GradingComponent } from './thome/grading/grading.component';
import { AssignHomeworkComponent } from './thome/assign-homework/assign-homework.component';
import { ContactInfoComponent } from './thome/contact-info/contact-info.component';
import { CommunicationTComponent } from './thome/communication-t/communication-t.component';
import { ViewBComponent } from './shome/view-b/view-b.component';
import { LinkParentComponent } from './admin-home/link-parent/link-parent.component';
import { ClassesComponent } from './admin-home/classes/classes.component';
import {AngularFireStorage} from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RegisterTeacherComponent,
    RegisterParentComponent,
    RegisterMangementComponent,
    StudentsDetailsComponent,
    StudentListComponent,

    AdminHomeComponent,
    PHomeComponent,
    SHomeComponent,
    THomeComponent,
    LoginComponent,
    ComplaintAComponent,
    EvaluationListComponent,
    CommunicationListComponent,
    OpenGradingComponent,
    ContactUsComponent,
    AboutUsComponent,
    StudentGradeComponent,
    EvaluationPComponent,
    CommunicationPComponent,
    GradeComponent,
    HomeworkComponent,
    EvaluationSComponent,
    CommunicationSComponent,
    GradingComponent,
    AssignHomeworkComponent,
    ContactInfoComponent,
    CommunicationTComponent,
    ComplaintComponent,
    ViewBComponent,
    LinkParentComponent,
    ClassesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule

  ],
  providers: [AngularFirestore , AngularFireStorage, InfoService , { provide: FirestoreSettingsToken, useValue: {} } , InfoServicet , InfoPService , InfoAService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
