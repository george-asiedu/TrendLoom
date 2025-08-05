import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function otpCodeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const isValid = /^[0-9]{6}$/.test(value);

    return isValid ? null : { invalidCode: true };
  };
}
