import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  registerForm: FormGroup = this.formBuilder.group({
    userName: ['', Validators.required],
    userPassword: ['', Validators.required],
  });

  hide: boolean = true;
  invalidEmailOrPassword: boolean = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  logIn() {
    const { userName, userPassword } = this.registerForm.getRawValue();
    const user = this.authService.logIn(userName, userPassword);
    if (!user) {
      this.invalidEmailOrPassword = true;
    } else {
      this.invalidEmailOrPassword = false;
      this.router.navigateByUrl('/dashboard');
    }
  }
}
