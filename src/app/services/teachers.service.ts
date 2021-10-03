import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teacher } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  private urlAPI = `${environment.urlAPI}/characters/staff`
  constructor(
    private http: HttpClient,
  ) { }

  list(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.urlAPI)
  }
}
