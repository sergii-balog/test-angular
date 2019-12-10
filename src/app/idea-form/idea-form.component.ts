import { Component, OnInit } from "@angular/core";
import { IdeasService } from "./../services/ideas.service";
import Swal from "sweetalert2";
import { Router, ActivatedRoute } from "@angular/router";
import { Idea } from "../models/Results/idea";

@Component({
  selector: "app-idea-form",
  templateUrl: "./idea-form.component.html",
  styleUrls: ["./idea-form.component.css"]
})
export class IdeaFormComponent implements OnInit {
  categories: string[] = [
    "General",
    "Core HR",
    "Time and Attendance",
    "Learning",
    "Performance"
  ];
  idea: Idea = { active: true };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: IdeasService
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    this.idea.id = +params.get("id");
    if (this.idea.id) {
      this.service.getIdea(this.idea).subscribe(resp => {
        if (resp.isOk) {
          this.idea.title = resp.idea.title;
          this.idea.description = resp.idea.description;
          this.idea.module = resp.idea.module;
          this.idea.active = resp.idea.active;
        } else {
          Swal.fire("Error!", resp.errorMessage, "warning");
        }
      });
    }
  }
  onCancel() {
    this.router.navigate(["/ideas"]);
  }
  onSubmit(idea) {
    if (this.idea.id) {
      console.log(this.idea);
      this.service.updateIdea(this.idea).subscribe(resp => {
        if (resp.isOk) {
          console.log(resp);
          Swal.fire(
            "Updated!",
            `Idea '${resp.idea.title}' has been updated`,
            "success"
          ).then(result => {
            this.router.navigate(["/ideas"]);
          });
        } else {
          Swal.fire("Error!", resp.errorMessage, "warning");
        }
      });
    } else {
      this.service.createIdea(idea).subscribe(resp => {
        if (resp.isOk) {
          Swal.fire(
            "Added!",
            `Idea '${resp.idea.title}' has been added`,
            "success"
          ).then(result => {
            this.router.navigate(["/ideas"]);
          });
        } else {
          Swal.fire("Error!", resp.errorMessage, "warning");
        }
      });
    }
  }
}
