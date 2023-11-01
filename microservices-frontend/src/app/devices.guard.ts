import { CanActivateFn } from '@angular/router';

export const devicesGuard: CanActivateFn = (route, state) => {
  return localStorage.getItem('role') === 'user' || localStorage.getItem('role') === 'admin';
};
