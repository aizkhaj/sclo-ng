import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Credentials } from '../shared/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userCredentials: Credentials = {
    login: '',
    password: '',
  };

  loginId: string;
  randomId: string;
  errorMessage: string;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  login(userCredentials: Credentials) {
    return this.loginService.login(userCredentials).subscribe(
      (resData) => {
        this.loginId = resData.login;
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }

  funkyId(loginId: string) {
    const splitUp = loginId.split('');
    this.randomId = splitUp.sort().join('');
  }
}
