import { CanActivateFn } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  return sessionStorage.getItem('role') === 'user';
};
