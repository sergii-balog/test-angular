import { Input } from "@angular/core";
import { AbstractControl, FormGroup } from "@angular/forms";

import { Field } from "../models/field";
import { FieldConfig } from "../models/field-config";

export class FormElementBase implements Field {
  @Input() config: FieldConfig;
  @Input() group: FormGroup;

  public getIsInvalidClass(control: AbstractControl) {
    return control.touched && !control.valid ? "is-invalid" : "";
  }
  public getInvalidFeedbackClass(control: AbstractControl) {
    return control.touched && !control.valid ? "invalid-feedback" : "";
  }
  get control() {
    return this.group.controls[this.config.name];
  }
}
