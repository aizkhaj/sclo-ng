import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '../shared/credentials';

const APIURL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  // newSignup(signupData: Credentials) {
  //   return this.http.post(APIURL, signupData);
  // }

  login(loginData: Credentials) {
    return this.http.post(APIURL, loginData);
  }
}
