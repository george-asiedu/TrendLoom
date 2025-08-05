import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { authRoutes } from '../../shared/utils/constants';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { nameValidator } from '../../shared/validators/name.validator';
import { emailValidator } from '../../shared/validators/email.validator';
import { passwordValidator } from '../../shared/validators/password.validator';
import { confirmPasswordValidator } from '../../shared/validators/confirm-password.validator';
import { AuthFacade } from '../../shared/facade/auth/auth.facade';
import { Signup } from '../../model/auth';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, SpinnerComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  public readonly loginRoute = authRoutes.login;
  public readonly showPassword = signal<boolean>(false);
  public readonly showConfirmPassword = signal<boolean>(false);

  private readonly fb = inject(FormBuilder);
  public readonly signupForm: FormGroup;
  private readonly authFacade = inject(AuthFacade);
  public readonly isLoading = this.authFacade.isLoading();

  public constructor() {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, nameValidator()]],
      email: ['', [Validators.required, emailValidator()]],
      password: ['', [Validators.required, passwordValidator()]],
      confirmPassword: ['', [Validators.required, confirmPasswordValidator('password')]],
    });
  }

  public onSignupSubmit() {
    if (this.signupForm.invalid) return;

    const user: Signup = this.signupForm.value;
    this.authFacade.signup(user);
  }

  public toggleShowPassword(): void {
    this.showPassword.update(value => !value);
  }

  public toggleShowConfirmPassword(): void {
    this.showConfirmPassword.update(value => !value);
  }

  public onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleShowPassword();
    }
  }

  public getControl(value: string) {
    return this.signupForm.get(value);
  }
}
