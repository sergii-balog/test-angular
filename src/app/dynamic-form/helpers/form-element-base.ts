import { AbstractControl } from "@angular/forms";

export class FormElementBase {
  public getIsInvalidClass(control: AbstractControl) {
    return control.touched && !control.valid ? "is-invalid" : "";
  }
  public getInvalidFeedbackClass(control: AbstractControl) {
    return control.touched && !control.valid ? "invalid-feedback" : "";
  }
}
