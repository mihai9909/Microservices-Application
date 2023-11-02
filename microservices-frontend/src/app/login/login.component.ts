import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService) {
   }

  login(): void {
    this.loginService.loginUser(this.email, this.password)
      .subscribe(response => {
        sessionStorage.setItem('role', response.body.role);
        sessionStorage.setItem('id', response.body.id);
        // Redirect to the appropriate page
        if (response.body.role === 'admin') {
          window.location.href = '/users';
        } else {
          window.location.href = '/devices';
        }
      }, error => {
        // Handle errors here
        console.error(error);
      });
  }
}
