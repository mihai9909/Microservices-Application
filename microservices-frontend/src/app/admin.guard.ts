import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  return sessionStorage.getItem('role') === 'admin';
};
