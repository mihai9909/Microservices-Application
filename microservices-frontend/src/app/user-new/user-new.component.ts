import { Component } from '@angular/core';
import { User } from '../user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.less']
})
export class UserNewComponent {
  user: User = {} as User;

  constructor(private http: HttpClient) { }

  create(): void {
    this.createUser().subscribe(() => {
      window.location.href = '/users';
    }, (error: any) => {
      // Handle errors here
      console.error(error);
    });
  }

  createUser(): any {
    return this.http.post<any>(`${environment.usersUrl}/users`, this.user, { observe: 'response', withCredentials: true});
  }
}
