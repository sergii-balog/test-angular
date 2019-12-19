import { Component, OnInit } from "@angular/core";

interface FormData {
  isSubscribed: boolean;
  newsArea: number;
  deliveryMethod: string;
}

@Component({
  selector: "app-material-test",
  templateUrl: "./material-test.component.html",
  styleUrls: ["./material-test.component.css"]
})
export class MaterialTestComponent implements OnInit {
  isLoaded = false;
  deliveryMethods = ["E-mail", "Post letter", "Monthly broshure"];
  form: FormData = {} as FormData;
  constructor() {}

  ngOnInit() {
    this.form.isSubscribed = false;
    setInterval(() => {
      this.isLoaded = true;
    }, 1000);
  }
}
