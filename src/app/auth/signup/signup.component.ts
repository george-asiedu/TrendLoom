import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { authRoutes, validationMessages } from '../../shared/utils/constants';
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
  public authFacade = inject(AuthFacade);

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
    this.authFacade.signup(this.signupForm.value as Signup);
    this.signupForm.reset();
  }

  public toggleShowPassword(): void {
    this.showPassword.update(value => !value);
  }

  public toggleShowConfirmPassword(): void {
    this.showConfirmPassword.update(value => !value);
  }

  public onKeyDown(event: KeyboardEvent, field: 'password' | 'confirmPassword'): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (field === 'password') {
        this.toggleShowPassword();
      } else {
        this.toggleShowConfirmPassword();
      }
    }
  }

  public getControl(value: string) {
    return this.signupForm.get(value);
  }

  // eslint-disable-next-line complexity
  public getErrorMessage(controlName: string): string {
    const control = this.getControl(controlName);
    if (!control || !control.invalid || !(control.touched || control.dirty)) {
      return '';
    }
    const messages = validationMessages[controlName];

    for (const errorKey in control.errors) {
      if (Object.prototype.hasOwnProperty.call(control.errors, errorKey) && messages[errorKey]) {
        return messages[errorKey];
      }
    }

    return 'Invalid value.';
  }
}
