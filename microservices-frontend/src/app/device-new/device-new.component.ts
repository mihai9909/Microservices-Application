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

  constructor(private http: HttpClient) { }

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
}
