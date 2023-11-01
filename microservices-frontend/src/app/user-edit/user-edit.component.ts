import { Component } from '@angular/core';
import { User } from '../user.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.less']
})
export class UserEditComponent {
  private apiUrl = environment.usersUrl; // Replace this with your actual API endpoint
  user: User = {} as User;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): any {
    this.http.get<User>(`${this.apiUrl}/users/${this.route.snapshot.paramMap.get('id')}`, { observe: 'response', withCredentials: true}).subscribe(response => {
      this.user = response.body!;
    });
  }

  updateUser(): any {
    this.http.put<any>(`${this.apiUrl}/users/${this.user.id}`, this.user, { observe: 'response', withCredentials: true}).subscribe(response => {
      window.location.href = '/users';
    }, error => {
      // Handle errors here
      console.error(error);
    });
  }
}
