import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  if (localStorage.getItem('loggedUser')) return true;
  inject(Router).navigateByUrl('/login');
  return false;
};
