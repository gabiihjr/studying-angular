import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from './new-user';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private httpClient: HttpClient) { }

  registerNewUser(newUser: NewUser) {
    return this.httpClient.post(`${API}/user/signup`, newUser);
  }

  verifyExistentUser(userName: string){
    return this.httpClient.get(`${API}/user/exists/${userName}`);
  }
}
