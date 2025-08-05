import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { authRoutes } from '../../shared/utils/constants';
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
  private readonly authFacade = inject(AuthFacade);
  public readonly isLoading = this.authFacade.isLoading();

  public constructor() {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, emailValidator()]],
      password: ['', [Validators.required, passwordValidator()]],
    });
  }

  public onSigninSubmit() {
    if (this.signinForm.invalid) return;

    const user: Signin = this.signinForm.value;
    this.authFacade.signin(user);
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
}
