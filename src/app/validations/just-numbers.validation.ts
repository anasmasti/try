import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function justNumbersValidation(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value != 8) return { justNumberError: true };
    if (control.value == 8) return null;
    return null;
  };
}
