import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ParentsComponent } from './components/parents/parents.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { StudentsComponent } from './components/students/students.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './login/components/login/login.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'parents', component: ParentsComponent},
  {path: 'teachers', component: TeachersComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'admin', component: AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
