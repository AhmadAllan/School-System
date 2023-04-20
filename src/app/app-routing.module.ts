import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: '' ,redirectTo: 'login', pathMatch: 'full'},
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'parents', loadChildren: () => import('./parents/parents.module').then(m => m.ParentsModule)},
  {path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)},
  {path: 'teachers', loadChildren: () => import('./teachers/teachers.module').then(m => m.TeachersModule)},
  {path: 'contact-us', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
