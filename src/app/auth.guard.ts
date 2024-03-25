import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardNotLogged: CanActivateFn = () => {
  if (localStorage.getItem('loggedUser')) return true;
  inject(Router).navigateByUrl('/login');
  return false;
};

export const authGuardLogged: CanActivateFn = () => {
  if (!localStorage.getItem('loggedUser')) return true;
  inject(Router).navigateByUrl('/dashboard');
  return false;
};
