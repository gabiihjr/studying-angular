import { environment } from './../../environments/environment';
import { TokenService } from './../authentication/token.service';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal, Animals } from './animals';

const API = environment.apiURL;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  listaDoUsuario(nomeDoUsuario: string): Observable<Animals>{
    return this.http.get<Animals>(`${API}/${nomeDoUsuario}/photos`)
  }

  searchForId(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${API}/photos/${id}`);
  }

  deleteAnimal(id: number): Observable<Animal>{
    return this.http.delete<Animal>(`${API}/photos/${id}`);
  }

  like(id: number): Observable<boolean>{
    return this.http.post(`${API}/photos/${id}/likes`, {}, {observe:'response'})
    .pipe(
      map(() => true),
      catchError((error) => {
        return error.status === NOT_MODIFIED ? of(false) : throwError(() => error);
      })
    )
  }
}
