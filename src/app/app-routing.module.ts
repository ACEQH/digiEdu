import {NgModule, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {AppComponent} from './app.component';
import {RegisterTeacherComponent} from './register-teacher/register-teacher.component';
import {RegisterParentComponent} from './register-parent/register-parent.component';
import {RegisterMangementComponent} from './register-mangement/register-mangement.component';
import {StudentsDetailsComponent} from './register/students-details/students-details.component';
import {AboutUsComponent} from '../app/admin-home/about-us/about-us.component';

import {AuthGuard} from './shared/guard/auth.guard';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {SecureInnerPagesGuard} from './shared/guard/secure-inner-pages.guard.ts.guard';
import {PHomeComponent} from './phome/phome.component';
import {SHomeComponent} from './shome/shome.component';
import {THomeComponent} from './thome/thome.component';
import {LoginComponent} from './login/login.component';
import {ContactUsComponent} from './admin-home/contact-us/contact-us.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'admin-home/register', redirectTo: 'register'},
  {path: 'home', component: AppComponent},
  {path: 'register-teacher', component: RegisterTeacherComponent},
  {path: 'admin-home/register-teacher', redirectTo: 'register-teacher'},
  {path: 'register-parent', component: RegisterParentComponent},
  {path: 'admin-home/register-parent', redirectTo: 'register-parent'},
  {path: 'register-mangement', component: RegisterMangementComponent},
  {path: 'admin-home/register-mangement', redirectTo: 'register-mangement'},
  {path: 'list', component: StudentsDetailsComponent},
  {path: 'admin-home/list', redirectTo: 'list'},

  {path: 'admin-home', component: AdminHomeComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'admin-home/contact-us', redirectTo: 'contact-us'},
  {path: 'PHome', component: PHomeComponent},
  {path: 'SHome', component: SHomeComponent},
  {path: 'THome', component: THomeComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'about-us', component: AboutUsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
