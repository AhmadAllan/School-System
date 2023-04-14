import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ParentsComponent } from './components/parents/parents.component';
import { TeachersComponent } from './components/teachers/teachers.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'parents', component: ParentsComponent},
  {path: 'teachers', component: TeachersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
