import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Field } from "../../models/field";
import { FieldConfig } from "../../models/field-config";

@Component({
  selector: "form-textarea",
  templateUrl: "./form-textarea.component.html",
  styleUrls: ["./form-textarea.component.css"]
})
export class FormTextareaComponent implements Field {
  @Input() config: FieldConfig;
  @Input() group: FormGroup;

  get control() {
    return this.group.controls[this.config.name];
  }
}
