import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './components/students/students.component';


@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    ReactiveFormsModule
  ]
})
export class StudentsModule { }
