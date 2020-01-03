import { Component } from "@angular/core";

@Component({
  selector: "course-form",
  templateUrl: "./course-form.component.html",
  styleUrls: ["./course-form.component.css"]
})
export class CourseFormComponent {
  categories = [
    { id: 1, title: "Development" },
    { id: 2, title: "Art" },
    { id: 3, title: "Languages" }
  ];
  onSubmit(value: any) {
    alert(JSON.stringify(value));
  }
}
