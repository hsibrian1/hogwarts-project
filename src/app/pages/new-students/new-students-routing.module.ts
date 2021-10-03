import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormComponent } from 'src/app/components/student-form/student-form.component';
import { NewStudentsComponent } from './new-students.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: NewStudentsComponent,
      },
      {
        path: 'create',
        component: StudentFormComponent,
      }
    ],
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
