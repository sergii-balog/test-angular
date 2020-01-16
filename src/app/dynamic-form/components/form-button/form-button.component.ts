import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Field } from "../../models/field";
import { FieldConfig } from "../../models/field-config";

@Component({
  selector: "form-button",
  templateUrl: "./form-button.component.html",
  styleUrls: ["./form-button.component.css"]
})
export class FormButtonComponent implements Field {
  @Input() config: FieldConfig;
  @Input() group: FormGroup;

  get control() {
    return this.group.controls[this.config.name];
  }
}
