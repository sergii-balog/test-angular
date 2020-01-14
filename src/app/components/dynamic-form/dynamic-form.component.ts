import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { Validators } from "@angular/forms";
import { DynamicFormComponent } from "src/app/dynamic-form/components/dynamic-form/dynamic-form.component";
import { FieldConfig } from "src/app/dynamic-form/models/field-config";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.css"]
})
export class DynamicFormDisplayComponent implements AfterViewInit {
  @ViewChild(DynamicFormComponent, { static: false })
  form: DynamicFormComponent;

  config: FieldConfig[] = [
    {
      type: "input",
      label: "First name",
      name: "firstName",
      placeholder: "Enter your first name",
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: "input",
      label: "Last name",
      name: "lastName",
      placeholder: "Enter your last name",
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: "select",
      label: "Country",
      name: "country",
      options: ["US", "UK", "UAE", "Ukraine"],
      placeholder: "Select an option",
      validation: [Validators.required]
    },
    {
      type: "select",
      label: "Favourite Food",
      name: "food",
      options: ["Pizza", "Hot Dogs", "Knakworstje", "Coffee"],
      placeholder: "Select an option",
      validation: [Validators.required]
    },
    {
      label: "Submit",
      name: "submit",
      type: "button",
      cssClass: "btn btn-primary px-5"
    }
  ];

  ngAfterViewInit() {
    let previousValid = this.form.valid;

    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled("submit", !previousValid);
      }
    });

    setTimeout(() => {
      this.form.setDisabled("submit", true);
      // this.form.setValue("name", "Todd Motto");
    });
  }

  submit(value: { [name: string]: any }) {
    console.log(value);
  }
}
