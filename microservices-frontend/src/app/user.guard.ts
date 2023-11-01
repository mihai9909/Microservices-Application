import { CanActivateFn } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  return localStorage.getItem('role') === 'user';
};
