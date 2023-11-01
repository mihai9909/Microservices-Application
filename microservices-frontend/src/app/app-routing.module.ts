import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { adminGuard } from './admin.guard';
import { DevicesComponent } from './devices/devices.component';
import { devicesGuard } from './devices.guard';
import { DeviceEditComponent } from './device-edit/device-edit.component';
import { DeviceNewComponent } from './device-new/device-new.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent, canActivate: [adminGuard]  },
  { path: 'login', component: LoginComponent},
  { path: 'devices', component: DevicesComponent, canActivate: [devicesGuard] },
  { path: 'devices/:id/edit', component: DeviceEditComponent, canActivate: [adminGuard] },
  { path: 'devices/new', component: DeviceNewComponent, canActivate: [adminGuard] },
  { path: 'users/new', component: UserNewComponent, canActivate: [adminGuard] },
  { path: 'users/:id/edit', component: UserEditComponent, canActivate: [adminGuard] },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
