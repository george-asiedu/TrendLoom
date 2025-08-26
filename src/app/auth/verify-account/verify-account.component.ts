import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { AuthFacade } from '../../shared/facade/auth/auth.facade';
import { otpCodeValidator } from '../../shared/validators/opt-code.validator';
import { validationMessages } from '../../shared/utils/constants';

@Component({
  selector: 'app-verify-account',
  imports: [ReactiveFormsModule, SpinnerComponent],
  templateUrl: './verify-account.component.html',
  styleUrl: './verify-account.component.css',
})
export class VerifyAccountComponent {
  private readonly fb = inject(FormBuilder);
  public authFacade = inject(AuthFacade);
  public readonly verifyAccountForm: FormGroup;

  public constructor() {
    this.verifyAccountForm = this.fb.group({
      code: ['', [Validators.required, otpCodeValidator()]],
    });
  }

  public onVerifyAccountSubmit() {
    if (this.verifyAccountForm.invalid) return;
    this.authFacade.verifyAccount(this.verifyAccountForm.value as string);
    this.verifyAccountForm.reset();
  }

  public getControl(value: string) {
    return this.verifyAccountForm.get(value);
  }

  // eslint-disable-next-line complexity
  public getLoginErrorMessage(controlName: string): string {
    const verifyControl = this.getControl(controlName);
    if (!verifyControl || !verifyControl.invalid || !(verifyControl.touched || verifyControl.dirty)) {
      return '';
    }
    const messages = validationMessages[controlName];
  
    for (const errorKey in verifyControl.errors) {
      if (Object.prototype.hasOwnProperty.call(verifyControl.errors, errorKey) && messages[errorKey]) {
        return messages[errorKey];
      }
    }
  
    return 'Invalid value.';
  }
}
