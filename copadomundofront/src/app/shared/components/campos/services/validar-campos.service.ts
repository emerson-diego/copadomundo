import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidarCamposService {
  constructor() {}

  hasError(control: AbstractControl, errorName: string): boolean {
    return control.hasError(errorName);
  }

  hasErrorValidar(control: AbstractControl, errorName: string): boolean {
    if (
      (control.touched || control.dirty) &&
      this.hasError(control, errorName)
    ) {
      return true;
    }
    return false;
  }

  lenghtValidar(control: AbstractControl, errorName: string): number {
    const error = control.errors[errorName];
    return error.requiredLength || error.min || error.max || 0;
  }
}
