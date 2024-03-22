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
  ];
  loggedUser: User | null = null;
  isLogged: boolean = false;
  constructor(private router: Router) {}
  public logIn(username: string, password: string) {
    const user = this.users.find(
      (u) => u.username === username && u.password === password,
    );
    if (user) {
      this.loggedUser = user;
      localStorage.setItem('loggedUser', JSON.stringify(this.loggedUser));
      this.isLogged = true;
    }
    return user;
  }
  public logOut(): void {
    localStorage.removeItem('loggedUser');
    this.loggedUser = null;
    this.isLogged = false;
    this.router.navigateByUrl('/');
  }
}
