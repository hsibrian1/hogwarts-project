import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private urlAPI = `${environment.urlAPI}/characters/students`;
  constructor(private http: HttpClient) {}

  list(): Observable<Student[]> {
    return this.http.get<Student[]>(this.urlAPI);
  }
}
