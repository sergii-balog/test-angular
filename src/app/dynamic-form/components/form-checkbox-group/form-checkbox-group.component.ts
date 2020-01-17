import { Component } from "@angular/core";
import { FormArray, FormControl } from "@angular/forms";

import { FormElementBase } from "../../helpers/form-element-base";

@Component({
  selector: "form-checkbox-group",
  templateUrl: "./form-checkbox-group.component.html",
  styleUrls: ["./form-checkbox-group.component.css"]
})
export class FormCheckboxGroupComponent extends FormElementBase {
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
