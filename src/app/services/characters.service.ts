import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private urlAPI = `${environment.urlAPI}/characters/house`;
  constructor(private http: HttpClient) {}

  list(houseName: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.urlAPI}/${houseName}`);
  }
}
