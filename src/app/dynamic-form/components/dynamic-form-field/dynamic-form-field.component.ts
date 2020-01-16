import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Field } from "../../models/field";
import { FieldConfig } from "../../models/field-config";

@Component({
  selector: "dynamic-field",
  templateUrl: "./dynamic-form-field.component.html",
  styleUrls: ["./dynamic-form-field.component.css"]
})
export class DynamicFormFieldComponent implements Field {
  @Input() config: FieldConfig;
  @Input() group: FormGroup;
  private components = [
    "input",
    "select",
    "checkbox",
    "textarea",
    "checkboxGroup",
    "radio",
    "date"
  ];

  constructor() {}

  isTypeValid() {
    return this.components.find(x => x === this.config.type);
  }
}
