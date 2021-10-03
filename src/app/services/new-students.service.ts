import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../interfaces';
import { calculateAge } from '../utils/calculateAge';

@Injectable({
  providedIn: 'root',
})
export class NewStudentsService {
  newStudents$: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);
  constructor() {}

  add(student: Student): void {
    this.newStudents$.next([
      ...this.newStudents$.getValue(),
      { ...student, age: calculateAge(student.dateOfBirth || '') },
    ]);
  }
}
