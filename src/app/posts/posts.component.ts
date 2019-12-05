import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { PostsService } from "../services/posts.service";
import * as $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";
import { AppError } from "../common/errors/app-error";
import { NotFoundError } from "../common/errors/not-found-error";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(
    private service: PostsService,
    private changeReference: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.deleteItem();
    this.loadDataTableStatically();
    this.loadDataTableDynamically();
  }
  public deletePost(id: number) {
    if (confirm("Are you sure you want to delete post?")) {
      alert(id + " post deleted");
    }
  }
  public deleteItem() {
    this.service.delete(4567890).subscribe(
      resp => {
        console.log("Item deleted", resp);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert("This item has already been deleted.");
        } else {
          throw error;
        }
      }
    );
  }
  loadDataTableStatically() {
    this.service.getAll().subscribe(resp => {
      // resp.headers
      //   .keys()
      //   .map(x => console.log(`${x}: ${resp.headers.get(x)}`));
      this.posts = resp.body;
      this.changeReference.detectChanges();
      const table: any = $("table");
      table.DataTable();
    });
  }
  loadDataTableDynamically() {
    window["PostsComponent"] = this;
    const table: any = $("#tableData");

    table.DataTable({
      ajax: {
        url: "http://jsonplaceholder.typicode.com/posts",
        type: "GET",
        datatype: "json",
        dataSrc: ""
      },
      columns: [
        { data: "title", width: "30%" },
        { data: "body", width: "60%" },
        {
          data: "id",
          width: "10%",
          render: function(data, type, row) {
            return `<button onclick="PostsComponent.deletePost(${data})">Delete</button>`;
          }
        }
      ],
      language: {
        emptyTable: "No records found"
      },
      width: "100%"
    });
  }
}
