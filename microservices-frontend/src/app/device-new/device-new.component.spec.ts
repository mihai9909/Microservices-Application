import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceNewComponent } from './device-new.component';

describe('DeviceNewComponent', () => {
  let component: DeviceNewComponent;
  let fixture: ComponentFixture<DeviceNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceNewComponent]
    });
    fixture = TestBed.createComponent(DeviceNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
