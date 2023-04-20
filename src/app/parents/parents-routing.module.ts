import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentsComponent } from './components/parents/parents.component';

const routes: Routes = [
  {path: 'parents', component: ParentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsRoutingModule { }
