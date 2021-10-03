import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Teacher } from '../interfaces';
import { calculateAge } from '../utils/calculateAge';

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  private urlAPI = `${environment.urlAPI}/characters/staff`;
  constructor(private http: HttpClient) {}

  list(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.urlAPI).pipe(
      map((v: Teacher[]) => {
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
