import { Component, OnInit } from '@angular/core';

import { Credentials } from '../shared/credentials';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  userCredentials: Credentials = {
    login: '',
    password: '',
  };

  loginId: string;
  createdAt: Date;
  errorMessage: string;

  constructor(private signupService: SignupService) {}

  ngOnInit(): void {}

  signup(userCredentials: Credentials) {
    return this.signupService.signup(userCredentials).subscribe(
      (resData) => {
        const { login, createdAt } = resData;

        this.loginId = login;
        this.createdAt = createdAt;
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }
}
