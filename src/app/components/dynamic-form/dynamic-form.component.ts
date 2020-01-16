import { Component, OnInit, ViewChild } from "@angular/core";
import { Validators } from "@angular/forms";
import { DynamicFormComponent } from "src/app/dynamic-form/components/dynamic-form/dynamic-form.component";
import { FieldConfig } from "src/app/dynamic-form/models/field-config";
import { FormConfig } from "./../../dynamic-form/models/form-config";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.css"]
})
export class DynamicFormDisplayComponent implements OnInit {
  formConfig: FormConfig = {
    title: "New Order",
    description: "Please fill all requred information to place an order",
    showCancellButton: true
  };
  fieldsConfig: FieldConfig[] = [];

  constructor(private router: Router) {}

  private getData() {
    this.fieldsConfig = [
      {
        type: "input",
        label: "First name",
        name: "firstName",
        placeholder: "Enter your first name",
        validation: [Validators.required, Validators.minLength(4)],
        description:
          "Please provide your First Name. Min length is 4 characters"
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
        options: [
          { text: "US", value: "1" },
          { text: "UK", value: "2" },
          { text: "UAE", value: "3" },
          { text: "Ukraine", value: "4" }
        ],
        placeholder: "Select an option",
        validation: [Validators.required],
        description: "We need to know your country for better logistic"
      },
      {
        type: "select",
        label: "Preffered airlines",
        name: "airlines",
        options: [
          { text: "American", value: "American" },
          { text: "Delta", value: "Delta" },
          { text: "United", value: "United" },
          { text: "Alaska", value: "Alaska" }
        ],
        placeholder: "Select an option",
        validation: [Validators.required]
      },
      {
        type: "textarea",
        label: "Comments",
        name: "comments",
        placeholder: "Any comments",
        validation: [Validators.required, Validators.minLength(5)],
        description:
          "Please provide any comments, which will be helpfull for this order"
      },
      {
        type: "checkboxGroup",
        label: "Required items",
        name: "stuff",
        options: [
          { text: "Airline tickets", value: "Airline tickets" },
          { text: "Car", value: "Car" },
          { text: "Train tickets", value: "Train tickets" },
          { text: "Allowances", value: "Allowances" }
        ],
        description: "Please select everything required for this trip",
        validation: [Validators.required],
        value: ["Allowances", "Airline tickets"]
      },
      {
        type: "radio",
        label: "Allovances currency",
        name: "currency",
        options: [
          { text: "US Dollars", value: "USD" },
          { text: "Euro", value: "EUR" },
          { text: "AE Dihrams", value: "AED" }
        ],
        description:
          "Please provide currency for allowances, depending on visiting country",
        validation: [Validators.required]
      },
      {
        type: "checkbox",
        label: "Agree to terms and conditions",
        name: "agreement",
        description: "You must agree with our terms and conditions",
        validation: [Validators.required]
      }
    ];
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getData();
    }, 1000);
  }

  submit(value: { [name: string]: any }) {
    console.log(value);
    if (!value.agreement) {
      Swal.fire(
        "Error",
        "Please agree with our terms and conditions first",
        "error"
      );
    } else {
      Swal.fire(
        "Submission",
        "Thank you for your order! We will contact you shortly.",
        "info"
      );
    }
  }
  cancell(value: { [name: string]: any }) {
    console.log(value);
    Swal.fire(
      "Cancellation",
      "Unfortunately you will loose all changed information",
      "warning"
    ).then(() => {
      this.router.navigate(["/"]);
    });
  }
}
