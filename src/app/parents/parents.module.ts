import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ParentsRoutingModule } from './parents-routing.module';
import { ParentsComponent } from './components/parents/parents.component';


@NgModule({
  declarations: [
    ParentsComponent
  ],
  imports: [
    CommonModule,
    ParentsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ParentsModule { }
