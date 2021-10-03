import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableHogwartsComponent } from '../components/table-hogwarts/table-hogwarts.component';
import { MaterialModule } from '../material-module/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentFormComponent } from '../components/student-form/student-form.component';

@NgModule({
  declarations: [TableHogwartsComponent, StudentFormComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    TableHogwartsComponent,
    StudentFormComponent,
    MaterialModule,
  ],
})
export class SharedModule {}
