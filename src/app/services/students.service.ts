import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Student } from '../interfaces';
import { calculateAge } from '../utils/calculateAge';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private urlAPI = `${environment.urlAPI}/characters/students`;
  constructor(private http: HttpClient) {}

  list(): Observable<Student[]> {
    return this.http.get<Student[]>(this.urlAPI).pipe(
      map((v: Student[]) => {
        return v.map((character) => ({
          name: character.name,
          patronus: character.patronus,
          age: calculateAge(character.dateOfBirth || ''),
          image: character.image,
          dateOfBirth: character.dateOfBirth,
        }));
      })
    );
  }
}
