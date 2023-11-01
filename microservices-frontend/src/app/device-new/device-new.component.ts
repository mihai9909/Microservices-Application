import { Component } from '@angular/core';
import { Device } from '../device.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-device-new',
  templateUrl: './device-new.component.html',
  styleUrls: ['./device-new.component.less']
})
export class DeviceNewComponent {
  device: Device = {} as Device;
  userIds: number[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  create(): void {
    this.createDevice().subscribe(() => {
      window.location.href = '/devices';
    }, (error: any) => {
      // Handle errors here
      console.error(error);
    });
  }

  createDevice(): any {
    return this.http.post<any>(`${environment.devicesUrl}/devices?role=admin`, this.device, { observe: 'response', withCredentials: true});
  }

  getUsers(): void {
    this.http.get<any>(`${environment.usersUrl}/users`, { observe: 'response', withCredentials: true}).subscribe(response => {
      this.userIds = response.body.map((user: any) => user.id);
      console.log(this.userIds);
    }, error => {
      // Handle errors here
      console.error(error);
    });
  }
}
