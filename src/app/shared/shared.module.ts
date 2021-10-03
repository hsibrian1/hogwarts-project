import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableHogwartsComponent } from '../components/table-hogwarts/table-hogwarts.component';
import { MaterialModule } from '../material-module/material.module';

@NgModule({
  declarations: [TableHogwartsComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CommonModule, TableHogwartsComponent, MaterialModule],
})
export class SharedModule {}
