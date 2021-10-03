import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewStudentsRoutingModule } from './new-students-routing.module';
import { NewStudentsComponent } from './new-students.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NewStudentsComponent
  ],
  imports: [
    CommonModule,
    NewStudentsRoutingModule,
    SharedModule,
  ]
})
export class NewStudentsModule { }
