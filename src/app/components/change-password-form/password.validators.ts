import { AbstractControl } from "@angular/forms";

export class PasswrordValidators {
  static validOldPassword(control: AbstractControl) {
    return new Promise(resolve => {
      if (control.value !== "123") {
        resolve({ invalidOldPassword: true });
      } else {
        resolve(null);
      }
    });
  }
  static passwordConfirmationShouldMatch(control: AbstractControl) {
    const newPassword = control.get("newPassword");
    const confirmPassword = control.get("confirmPassword");
    if (newPassword.value !== confirmPassword.value) {
      return { invalidPasswordConfirmation: true };
    } else {
      return null;
    }
  }
}
