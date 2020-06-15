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

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  login(userCredentials: Credentials) {
    return this.loginService.login(userCredentials);
  }
}
