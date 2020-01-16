import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { FormElementBase } from "../../helpers/form-element-base";
import { Field } from "../../models/field";
import { FieldConfig } from "../../models/field-config";

@Component({
  selector: "form-radio",
  templateUrl: "./form-radio.component.html",
  styleUrls: ["./form-radio.component.css"]
})
export class FormRadioComponent extends FormElementBase implements Field {
  @Input() config: FieldConfig;
  @Input() group: FormGroup;

  get control() {
    return this.group.controls[this.config.name];
  }
}
