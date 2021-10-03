import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces';
import { NewStudentsService } from 'src/app/services/new-students.service';

@Component({
  selector: 'app-new-students',
  templateUrl: './new-students.component.html',
  styleUrls: ['./new-students.component.css'],
})
export class NewStudentsComponent implements OnInit {
  dataStudents: Student[] = [];

  constructor(private newStudentsServices: NewStudentsService) {}

  ngOnInit(): void {
    this.newStudentsServices.newStudents$.subscribe((students: Student[]) => {
      this.dataStudents = students;
    });
  }
}
