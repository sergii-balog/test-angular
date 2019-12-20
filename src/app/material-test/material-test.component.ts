import { Component, OnInit } from "@angular/core";
import { ErrorStateMatcher, DateAdapter } from "@angular/material/core";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ZipperLikeComponent } from "./../zipper-like/zipper-like.component";
import { GithubFollowersComponent } from "./../github-followers/github-followers.component";
import { IdeaFormComponent } from "./../idea-form/idea-form.component";

interface FormData {
  isSubscribed: boolean;
  newsArea: number;
  deliveryMethod: string;
  email: string;
  comments: string;
  deliveryDate: Date;
}

@Component({
  selector: "app-material-test",
  templateUrl: "./material-test.component.html",
  styleUrls: ["./material-test.component.css"]
})
export class MaterialTestComponent implements OnInit {
  isLoaded = false;
  deliveryMethods = ["E-mail", "Post letter", "Monthly broshure"];
  formData: FormData = {} as FormData;
  minDate = new Date(2019, 11, 27);
  maxDate = new Date(2020, 0, 10);
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  constructor(private adapter: DateAdapter<any>, public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(IdeaFormComponent, {
      width: "750px",
      height: "60%"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
  onKey($event) {
    this.formData.email = this.emailFormControl.value;
  }
  submit() {
    if (
      this.formData.deliveryMethod &&
      this.formData.email &&
      this.formData.deliveryDate
    ) {
      console.log(this.formData);
    }
  }
  ngOnInit() {
    this.formData.isSubscribed = false;
    this.adapter.setLocale("uk");
    setInterval(() => {
      this.isLoaded = true;
    }, 1000);
  }
}
