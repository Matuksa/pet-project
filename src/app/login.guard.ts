import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = () => {
  if (!localStorage.getItem('loggedUser')) return true;
  inject(Router).navigateByUrl('/dashboard');
  return false;
};
