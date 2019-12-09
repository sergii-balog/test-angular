import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { IdeasService } from "../services/ideas.service";
import * as $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";

@Component({
  selector: "app-ideas",
  templateUrl: "./ideas.component.html",
  styleUrls: ["./ideas.component.css"]
})
export class IdeasComponent implements OnInit {
  ideas: any;
  staticTable: any;
  constructor(
    private service: IdeasService,
    private changeReference: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.service.getAll().subscribe(result => {
      if (result.isOk === true) {
        this.ideas = result.ideas;
        this.changeReference.detectChanges();
        this.staticTable = $("#tableDataStatic").DataTable();
        this.staticTable.draw(true);
      }
    });
  }
}
