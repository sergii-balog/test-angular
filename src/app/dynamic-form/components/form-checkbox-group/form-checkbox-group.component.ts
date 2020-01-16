import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, FormArray } from "@angular/forms";

import { Field } from "../../models/field";
import { FieldConfig } from "../../models/field-config";

@Component({
  selector: "form-checkbox-group",
  templateUrl: "./form-checkbox-group.component.html",
  styleUrls: ["./form-checkbox-group.component.css"]
})
export class FormCheckboxGroupComponent implements Field {
  @Input() config: FieldConfig;
  @Input() group: FormGroup;

  get control() {
    return this.group.controls[this.config.name];
  }

  optionsChange(value: string, isChecked: boolean) {
    const checkboxArray = this.control as FormArray;
    if (isChecked) {
      checkboxArray.push(new FormControl(value));
    } else {
      const index = checkboxArray.controls.findIndex(x => x.value === value);
      checkboxArray.removeAt(index);
    }
  }
  isOptionSelected(value) {
    const checkboxArray = this.control as FormArray;
    return checkboxArray.controls.find(x => x.value === value);
  }
}
