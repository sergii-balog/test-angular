import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { MdComponentsModule } from "./../modules/md-components.module";
import { DynamicFormFieldComponent } from "./components/dynamic-form-field/dynamic-form-field.component";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { FormButtonComponent } from "./components/form-button/form-button.component";
import { FormCheckboxGroupComponent } from "./components/form-checkbox-group/form-checkbox-group.component";
import { FormCheckboxComponent } from "./components/form-checkbox/form-checkbox.component";
import { FormInputComponent } from "./components/form-input/form-input.component";
import { FormRadioComponent } from "./components/form-radio/form-radio.component";
import { FormSelectComponent } from "./components/form-select/form-select.component";
import { FormTextareaComponent } from "./components/form-textarea/form-textarea.component";
import { DynamicFieldDirective } from "./directives/dynamic-field.directive";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MdComponentsModule],
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormCheckboxComponent,
    FormTextareaComponent,
    FormCheckboxGroupComponent,
    DynamicFormFieldComponent,
    FormRadioComponent
  ],
  exports: [DynamicFormComponent]
})
export class DynamicFormModule {}
