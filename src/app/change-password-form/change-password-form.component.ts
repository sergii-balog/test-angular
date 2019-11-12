import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PasswrordValidators } from "./password.validators";

@Component({
  selector: "change-password-form",
  templateUrl: "./change-password-form.component.html",
  styleUrls: ["./change-password-form.component.css"]
})
export class ChangePasswordFormComponent {
  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group(
      {
        oldPassword: [
          "",
          Validators.required,
          PasswrordValidators.validOldPassword
        ],
        newPassword: ["", Validators.required],
        confirmPassword: ["", Validators.required]
      },
      {
        validator: PasswrordValidators.passwordConfirmationShouldMatch
      }
    );
  }
  get oldPassword() {
    return this.form.get("oldPassword");
  }
  get newPassword() {
    return this.form.get("newPassword");
  }
  get confirmPassword() {
    return this.form.get("confirmPassword");
  }
  onSubmit(value) {
    if (!this.form.invalid) {
      alert(JSON.stringify(value));
    } else {
      alert("Invalid form");
    }
  }
}
