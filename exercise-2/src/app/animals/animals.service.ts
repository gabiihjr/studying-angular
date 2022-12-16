import { environment } from './../../environments/environment';
import { TokenService } from './../authentication/token.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animals } from './animals';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  listaDoUsuario(nomeDoUsuario: string): Observable<Animals>{
    const token = this.tokenService.returnToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.http.get<Animals>(`${API}/${nomeDoUsuario}/photos`, {
      headers,
    });
  }
}
