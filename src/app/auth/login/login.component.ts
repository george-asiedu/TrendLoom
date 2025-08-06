import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { authRoutes, validationMessages } from '../../shared/utils/constants';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthFacade } from '../../shared/facade/auth/auth.facade';
import { emailValidator } from '../../shared/validators/email.validator';
import { passwordValidator } from '../../shared/validators/password.validator';
import { Signin } from '../../model/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, SpinnerComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public readonly forgotPasswordRoute = authRoutes.forgotPassword;
  public readonly signupRoute = authRoutes.signup;
  public readonly showPassword = signal<boolean>(false);

  private readonly fb = inject(FormBuilder);
  public readonly signinForm: FormGroup;
  public authFacade = inject(AuthFacade);

  public constructor() {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, emailValidator()]],
      password: ['', [Validators.required, passwordValidator()]],
    });
  }

  public onSigninSubmit() {
    if (this.signinForm.invalid) return;
    this.authFacade.signin(this.signinForm.value as Signin);
    this.signinForm.reset();
  }

  public toggleShowPassword(): void {
    this.showPassword.update(value => !value);
  }

  public onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleShowPassword();
    }
  }

  public getControl(value: string) {
    return this.signinForm.get(value);
  }

  // eslint-disable-next-line complexity
  public getLoginErrorMessage(controlName: string): string {
    const loginControl = this.getControl(controlName);
    if (!loginControl || !loginControl.invalid || !(loginControl.touched || loginControl.dirty)) {
      return '';
    }
    const messages = validationMessages[controlName];

    for (const errorKey in loginControl.errors) {
      if (Object.prototype.hasOwnProperty.call(loginControl.errors, errorKey) && messages[errorKey]) {
        return messages[errorKey];
      }
    }

    return 'Invalid value.';
  }
}
