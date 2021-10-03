import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../interfaces';
import { calculateAge } from '../utils/calculateAge';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private urlAPI = `${environment.urlAPI}/characters/house`;
  constructor(private http: HttpClient) {}

  list(houseName: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.urlAPI}/${houseName}`).pipe(
      map((v: Character[]) => {
        return v.map((character) => ({
          name: character.name,
          patronus: character.patronus,
          age:
            calculateAge(character.dateOfBirth || ''),
          image: character.image,
          dateOfBirth: character.dateOfBirth,
        }));
      })
    );
  }
}
