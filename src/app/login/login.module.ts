import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import { LoginService } from './login.service';
import { LoginComponent } from './login.component';

import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  // providers: [LoginService],
  imports: [CommonModule, FormsModule, LoginRoutingModule],
})
export class LoginModule {}
