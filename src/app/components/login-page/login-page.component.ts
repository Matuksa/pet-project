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
  registerForm: FormGroup = this.formBuilder.group({
    userName: ['', Validators.required],
    userPassword: ['', Validators.required],
  });
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  func(): void {
    console.log(this.registerForm.get);
  }

  hide = true;

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
