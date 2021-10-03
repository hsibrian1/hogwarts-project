import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  studentsData: Student[] = [];

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.studentsService.list().subscribe((respData: Student[]) => {
      this.studentsData = respData;
    });
  }
}
