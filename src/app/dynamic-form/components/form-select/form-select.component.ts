import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Field } from "../../models/field";
import { FieldConfig } from "../../models/field-config";

@Component({
  selector: "form-select",
  templateUrl: "./form-select.component.html",
  styleUrls: ["./form-select.component.css"]
})
export class FormSelectComponent implements Field {
  config: FieldConfig;
  group: FormGroup;

  get control() {
    return this.group.controls[this.config.name];
  }
}
