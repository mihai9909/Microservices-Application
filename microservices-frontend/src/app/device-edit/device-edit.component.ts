import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../device.model';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.less']
})
export class DeviceEditComponent {
  private apiUrl = environment.devicesUrl; // Replace this with your actual API endpoint

  device: Device = {} as Device;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDevice().subscribe(response => {
      this.device = response.body;
    }, error => {
      // Handle errors here
      console.error(error);
    });
  }

  update(): void {
    console.log(this.device);
    this.updateDevice().subscribe(response => {
      window.location.href = '/devices';
    }, error => {
      // Handle errors here
      console.error(error);
    });
  }

  updateDevice(): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/devices/${this.device.id}?role=admin`, this.device, { observe: 'response', withCredentials: true});
  }
  
  getDevice(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/devices/${this.route.snapshot.paramMap.get('id')}`, { observe: 'response', withCredentials: true});
  }
}
