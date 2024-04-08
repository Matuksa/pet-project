import { Injectable } from '@angular/core';
import { User } from './core/interfaces/user.interface';
import { UserRole } from './core/enums/role.enum';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [
    {
      id: 1,
      username: 'admin',
      password: '123',
      role: UserRole.ADMIN,
    },
    {
      id: 2,
      username: 'admin2',
      password: '123',
      role: UserRole.ADMIN,
    },
    {
      id: 3,
      username: '1',
      password: '1',
      role: UserRole.ADMIN,
    },
  ];

  loggedUser: User | null = null;
  isLogged: boolean = false;

  constructor(private router: Router) {}

  public logIn(username: string, password: string) {
    const currentUser = this.users.find(
      (user) => user.username === username && user.password === password,
    );
    if (currentUser) {
      this.loggedUser = currentUser;
      localStorage.setItem('loggedUser', JSON.stringify(this.loggedUser));
      this.isLogged = true;
    }
    return currentUser;
  }

  public logOut(): void {
    localStorage.removeItem('loggedUser');
    this.loggedUser = null;
    this.isLogged = false;
    this.router.navigateByUrl('/');
  }
}
