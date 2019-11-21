import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { PostsService } from "../services/posts.service";
import * as $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";

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
    this.loadDataTableDynamically();
    // this.service.addService({}).subscribe(resp => {
    //   console.log(resp);
    // });
    window["deletePost"] = this.deletePost;
  }
  public deletePost(id) {
    if (confirm("Are you sure you want to delete post?")) {
      alert(id + " post deleted");
    }
  }
  loadDataTableStatically() {
    this.service.getPosts().subscribe(resp => {
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
            return `<button onclick="deletePost(${data})">Delete</button>`;
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
