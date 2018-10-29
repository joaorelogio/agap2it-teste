import { Injectable } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';

@Injectable()
export class CustomValidatorService {

  static max(max: number) {
    return (control: AbstractControl): { [key: string]: boolean } | null => {

      const val: number = control.value;

      if (control.pristine || control.pristine) {
        return null;
      }
      if (val <= max) {
        return null;
      }
      return { 'max': true };
    };
  }

  static min(min: number) {
    return (control: AbstractControl): { [key: string]: boolean } | null => {

      const val: number = control.value;

      if (control.pristine || control.pristine) {
        return null;
      }
      if (val >= min) {
        return null;
      }
      return { 'min': true };
    };
  }
}
