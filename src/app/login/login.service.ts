import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '../shared/credentials';

const APIURL = 'http://localhost:3000/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(loginData: Credentials) {
    return this.http.post(APIURL, loginData);
  }
}
