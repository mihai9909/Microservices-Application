import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = environment.usersUrl; // Replace this with your actual API endpoint

  constructor(private http: HttpClient) { }

  loginUser(email: string, password: string): Observable<any> {
    const body = {
      user: {
        email: email,
        password: password
      }
    };
    return this.http.post<any>(`${this.apiUrl}/users/sign_in`, body, { observe: 'response', withCredentials: true});
  }
}
