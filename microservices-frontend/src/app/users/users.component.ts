import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent {
  users: User[] = [];
  apiUrl = environment.usersUrl; // Replace this with your actual API endpoint

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.http.get<User[]>(`${this.apiUrl}/users`, { observe: 'response', withCredentials: true}).subscribe(response => {
      this.users = response.body || [];
    });
  }

  deleteUser(id: number): void {
    if(!confirm("Are you sure to delete " + this.users.find(user => user.id === id)?.email + "?")){
      return;
    }

    this.http.delete<any>(`${this.apiUrl}/users/${id}`, { observe: 'response', withCredentials: true}).subscribe(response => {
      window.location.reload();
    }, error => {
      // Handle errors here
      console.error(error);
    });
  }
}
