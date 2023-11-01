import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../device.model';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.less']
})
export class DevicesComponent {
  private apiUrl = environment.devicesUrl; // Replace this with your actual API endpoint
  constructor(private http: HttpClient) { }
  devices: Device[] = [];

  ngOnInit(): void {
    this.getDevices().subscribe(response => {
      this.devices = response.body;
    }, error => {
      // Handle errors here
      console.error(error);
    });
  }

  currentRole(): string {
    return localStorage.getItem('role') || '';
  }

  currentUserId(): string {
    return localStorage.getItem('id') || '';
  }

  isAdmin(): boolean {
    return this.currentRole() === 'admin';
  }

  getDevices(): Observable<any> {
    if(this.currentRole() === 'admin') {
      return this.http.get<any>(`${this.apiUrl}/devices?role=${this.currentRole()}`, { observe: 'response', withCredentials: true});
    } else {
      return this.http.get<any>(`${this.apiUrl}/users/${this.currentUserId()}/devices?role=${this.currentRole()}`, { observe: 'response', withCredentials: true});
    }
  }

  delete(id: number): Observable<any> {
      return this.http.delete<any>(`${this.apiUrl}/devices/${id}?role=${this.currentRole()}`, { observe: 'response', withCredentials: true});
  }

  deleteDevice(id: number): void {
    if(!confirm("Are you sure to delete " + this.devices.find(device => device.id === id)?.name + "?")){
      return;
    }

    this.delete(id).subscribe(response => {
      window.location.reload();
    }, error => {
      // Handle errors here
      console.error(error);
    });
  }
}

