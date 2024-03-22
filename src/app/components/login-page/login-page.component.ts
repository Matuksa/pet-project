import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  // public userName: string = '';
  // public userPassword: string = '';
  registerForm: FormGroup = this.formBuilder.group({
    userName: ['', Validators.required],
    userPassword: ['', Validators.required],
  });
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}
  // setUserName(userName: string): void {
  //   this.userName = userName;
  // }
  // setUserPassword(userPassword: string): void {
  //   this.userName = userPassword;
  // }
  // getUserName(): string {
  //   return this.userName;
  // }
  // getUserPassword(): string {
  //   return this.userName;
  // }
  func(): void {
    console.log(this.registerForm.get);
  }

  // email = new FormControl('', [Validators.required, Validators.email]);

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   if (this.password.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  hide = true;

  // password = new FormControl('', [Validators.required]);

  logIn() {
    const user = this.authService.logIn(
      this.registerForm.value.userName,
      this.registerForm.value.userPassword,
    );

    if (!user) {
      alert('Invalid username of password');
    } else {
      this.router.navigateByUrl('/dashboard');
    }
  }
}
