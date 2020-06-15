import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Credentials } from '../shared/credentials';

interface SignupResponseData {
  id: number;
  login: string;
  password: string;
  createdAt: Date;
}

const APIURL = 'http://localhost:3000/signup';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  signup(signupData: Credentials) {
    return this.http.post<SignupResponseData>(APIURL, signupData);
  }
}
