import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { PostsService } from "../services/posts.service";
import * as $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";
import { AppError } from "../common/errors/app-error";
import { NotFoundError } from "../common/errors/not-found-error";
import { IPost } from "./../models/post";
import { DataService } from "./../services/data.service";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [];
  staticTable: any;
  constructor(
    private service: PostsService,
    private changeReference: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.loadDataTableStatically();
    this.loadDataTableDynamically();
  }
  public deletePost(id: number) {
    if (confirm("Are you sure you want to delete post?")) {
      const postToUpdate = this.posts.find(x => x.id === id);
      this.service.update(postToUpdate).subscribe(
        post => {
          console.log("Item " + post.id + " updated", post);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert("This item has already been deleted.");
          } else {
            throw error;
          }
        }
      );
      this.service.delete(id).subscribe(
        resp => {
          console.log("Item " + id + " deleted", resp);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert("This item has already been deleted.");
          } else {
            throw error;
          }
        }
      );
      this.posts = this.posts.filter(x => x.id !== id);
      this.staticTable.destroy();
      this.changeReference.detectChanges();
      this.staticTable = ($("#tableDataStatic") as any).DataTable();
      this.staticTable.draw(true);
    }
  }
  private formatStaticTable(posts: IPost[]) {
    this.posts = posts;
    this.changeReference.detectChanges();
    this.staticTable = ($("#tableDataStatic") as any).DataTable();
  }
  private loadDataTableStatically() {
    this.service.getAll().subscribe(posts => this.formatStaticTable(posts));
  }
  private loadDataTableDynamically() {
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
