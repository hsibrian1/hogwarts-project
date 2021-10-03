import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/interfaces';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachersData: Teacher[] = [];

  constructor(private teachersService: TeachersService) {}

  ngOnInit(): void {
    this.teachersService.list().subscribe((respData: Teacher[]) => {
      this.teachersData = respData;
    });
  }

}
