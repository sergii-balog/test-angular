import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { IdeasService } from "../../services/ideas.service";
import * as $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";
import { IdeasResult } from "../../models/Results/ideas-result";
import { Idea } from "../../models/Results/idea";
import Swal from "sweetalert2";
import { Router } from "@angular/router";

@Component({
  selector: "app-ideas",
  templateUrl: "./ideas.component.html",
  styleUrls: ["./ideas.component.css"]
})
export class IdeasComponent implements OnInit {
  ideas: any;
  staticTable: any;
  loaded: boolean;
  constructor(
    private service: IdeasService,
    private router: Router,
    private changeReference: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.service.getAllIdeas().subscribe(result => {
      if (result.isOk === true) {
        this.ideas = result.ideas;
        this.loaded = true;
        this.changeReference.detectChanges();
        this.staticTable = ($("#ideasTable") as any).DataTable();
      }
    });
  }
  newIdea() {
    this.router.navigate(["/new-idea"]);
  }
  deleteIdea(idea: Idea) {
    Swal.fire({
      title: "Are you sure?",
      text: `Are you sure you want to delete '${idea.title}' idea?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        this.ideas = this.ideas.filter(x => x.id !== idea.id);
        this.staticTable.destroy();
        this.changeReference.detectChanges();
        this.staticTable = ($("#ideasTable") as any).DataTable();
        this.staticTable.draw(true);
        this.service.deleteIdea(idea).subscribe(resp => {
          if (resp.isOk) {
            Swal.fire(
              "Deleted!",
              `Idea '${resp.idea.title}' has been deleted`,
              "success"
            );
          } else {
            Swal.fire("Error!", resp.errorMessage, "warning");
          }
        });
      }
    });
  }
}
