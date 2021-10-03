import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewStudentsComponent } from './new-students.component';

const routes: Routes = [
  {
    path: '',
    component: NewStudentsComponent,
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewStudentsRoutingModule { }
