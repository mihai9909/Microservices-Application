import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'microservices-frontend';

  constructor(private http: HttpClient) { }

  currentUser() {
    return localStorage.getItem('role');
  }

  loggedIn() {
    return !!localStorage.getItem('role');
  }

}
