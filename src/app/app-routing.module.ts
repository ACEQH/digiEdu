import {NgModule, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {AppComponent} from './app.component';
import {RegisterTeacherComponent} from './register-teacher/register-teacher.component';
import {RegisterParentComponent} from './register-parent/register-parent.component';
import {RegisterMangementComponent} from './register-mangement/register-mangement.component';
import {StudentsDetailsComponent} from './register/students-details/students-details.component';
import {AboutUsComponent} from './admin-home/about-us/about-us.component';
import {ComplaintComponent} from './phome/complaint/complaint.component';
import {AuthGuard} from './shared/guard/auth.guard';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {SecureInnerPagesGuard} from './shared/guard/secure-inner-pages.guard.ts.guard';
import {PHomeComponent} from './phome/phome.component';
import {SHomeComponent} from './shome/shome.component';
import {THomeComponent} from './thome/thome.component';
import {LoginComponent} from './login/login.component';
import {ContactUsComponent} from './admin-home/contact-us/contact-us.component';
import {ViewBComponent} from './shome/view-b/view-b.component';
import {CommunicationListComponent} from './admin-home/communication-list/communication-list.component';
import { HomeworkComponent } from './shome/homework/homework.component';
import { GradeComponent } from './shome/grade/grade.component';
import { CommunicationSComponent } from './shome/communication-s/communication-s.component';
import { EvaluationSComponent } from './shome/evaluation-s/evaluation-s.component';
import {EvaluationListComponent} from './admin-home/evaluation-list/evaluation-list.component';
import {ComplaintAComponent} from './admin-home/complaint/complaint.component';
import {LinkParentComponent} from './admin-home/link-parent/link-parent.component';
import {OpenGradingComponent} from './admin-home/open-grading/open-grading.component';


const routes: Routes = [
  {path: 'app/register', component: RegisterComponent},
  {path: 'register', redirectTo: 'register'},
  {path: 'app/home', component: AppComponent},
  {path: 'app/register-teacher', component: RegisterTeacherComponent},
  {path: 'admin-home/register-teacher', redirectTo: 'register-teacher'},
  {path: 'app/register-parent', component: RegisterParentComponent},
  {path: 'admin-home/register-parent', redirectTo: 'register-parent'},
  {path: 'app/register-mangement', component: RegisterMangementComponent},
  {path: 'admin-home/register-mangement', redirectTo: 'register-mangement'},
  {path: 'app/list', component: StudentsDetailsComponent},
  {path: 'admin-home/list', redirectTo: 'list'},


  {path: 'app/admin-home', component: AdminHomeComponent},
  {path: 'app/contact-us', component: ContactUsComponent},
  {path: 'admin-home/contact-us', redirectTo: 'contact-us'},
  {path: 'PHome', component: PHomeComponent},
  {path: 'SHome', component: SHomeComponent},
  {path: 'THome', component: THomeComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'app/about-us', component: AboutUsComponent},
  {path: 'admin-home/about-us', redirectTo: 'about-us'},
  {path: 'view-b', component: ViewBComponent},
  {path: 'Shome/view-b', redirectTo: 'view-b'},
  {path: 'homework', component: HomeworkComponent},
  {path: 'evaluation-s', component: EvaluationSComponent},
  {path: 'SHome/evaluation-s', redirectTo: 'evaluation-s'},
  {path: 'grade', component: GradeComponent},
  {path: 'SHome/grade', redirectTo: 'grade'},
  {path: 'SHome/homework', redirectTo: 'homework'},
  {path: 'communication-s', component: CommunicationSComponent},
  {path: 'SHome/communication-s', redirectTo: 'communication-s'},
  {path: 'complaint', component: ComplaintComponent},
  {path: 'PHome/complaint', redirectTo: 'complaint'},
  {path: 'app/communication-list', component: CommunicationListComponent},
  {path: 'app/communication-list', redirectTo: 'communication-list'},
  {path: 'app/evaluation-list', component: EvaluationListComponent},
  {path: 'evaluation-list', redirectTo: 'evaluation-list'},
  {path: 'app/complaint', component: ComplaintAComponent},
  {path: 'complaint', redirectTo: 'complaint'},
  {path: 'link-parent', component: LinkParentComponent},
  {path: 'app/link-parent', redirectTo: 'link-parent'},
  {path: 'open-grading', component: OpenGradingComponent},
  {path: 'app/open-grading', redirectTo: 'open-grading'},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
