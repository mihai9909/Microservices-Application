import { CanActivateFn } from '@angular/router';

export const devicesGuard: CanActivateFn = (route, state) => {
  return sessionStorage.getItem('role') === 'user' || sessionStorage.getItem('role') === 'admin';
};
