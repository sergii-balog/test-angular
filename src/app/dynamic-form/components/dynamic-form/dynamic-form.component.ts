import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { FieldConfig } from "../../models/field-config";
import { FormConfig } from "../../models/form-config";

@Component({
  exportAs: "dynamicForm",
  selector: "dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.css"]
})
export class DynamicFormComponent implements OnChanges, OnInit {
  @Input()
  formConfig: FormConfig;

  @Input()
  fieldsConfig: FieldConfig[];

  @Output() submitted = new EventEmitter<any>();
  @Output() cancelled = new EventEmitter<any>();

  form: FormGroup;

  private get controls() {
    return this.fieldsConfig; // .filter(({ type }) => type !== "button");
  }
  get value() {
    return this.form.value;
  }
  get valid() {
    return this.form.valid;
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.createGroup();
  }

  ngOnChanges() {
    if (this.form) {
      const controls = Object.keys(this.form.controls);
      const configControls = this.controls.map(item => item.name);
      controls
        .filter(control => !configControls.includes(control))
        .forEach(control => this.form.removeControl(control));
      configControls
        .filter(control => !controls.includes(control))
        .forEach(name => {
          const config = this.fieldsConfig.find(
            control => control.name === name
          );
          this.form.addControl(name, this.createControl(config));
        });
      console.log(this.form.controls);
    }
  }

  private createGroup() {
    const group = this.fb.group({});
    this.controls.forEach(control =>
      group.addControl(control.name, this.createControl(control))
    );
    return group;
  }

  private createControl(config: FieldConfig) {
    const { disabled, validation, value, type } = config;
    if (type === "checkboxGroup") {
      return this.fb.array(value || []);
    }
    return this.fb.control({ disabled, value }, validation);
  }

  handleSubmit(event: Event) {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.submitted.emit(this.value);
  }

  handleCancell(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.cancelled.emit(this.value);
  }
}
