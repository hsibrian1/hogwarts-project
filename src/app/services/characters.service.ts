import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseData, Character } from '../interfaces';
import { calculateAge } from '../utils/calculateAge';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private urlAPI = `${environment.urlAPI}/characters/house`;
  constructor(private http: HttpClient) {}

  list(houseName: string): Observable<Character[]> {
    return this.http.get<BaseData[]>(`${this.urlAPI}/${houseName}`).pipe(
      map((v: BaseData[]) => {
        return v.map((character) => ({
          name: character.name,
          patronus: character.patronus,
          age:
            calculateAge(character.dateOfBirth || '', character.yearOfBirth),
          image: character.image,
        }));
      })
    );
  }
}
