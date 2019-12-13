import { Component, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";
import { UsersService } from "../services/users.service";
import {
  PageChangeEvent,
  GridDataResult,
  DataBindingDirective,
  DataStateChangeEvent
} from "@progress/kendo-angular-grid";
// import * as $ from "jquery";
// import "datatables.net";
// import "datatables.net-bs4";
import Swal from "sweetalert2";
import { User } from "../models/Results/user";
import { SortDescriptor, orderBy, process } from "@progress/kendo-data-query";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  @ViewChild(DataBindingDirective, { static: false })
  dataBinding: DataBindingDirective;
  public mySelection: string[] = [];
  public gridView: any[];

  users: User[];
  //taticTable: any;
  loaded: boolean;
  usersByRole: number[];
  usersByRoleNames: string[];

  constructor(
    private service: UsersService,
    private changeReference: ChangeDetectorRef
  ) {}

  private loadChart() {
    this.usersByRole = [];
    this.usersByRoleNames = [];
    this.usersByRole.push(this.users.filter(x => x.role === "User").length);
    this.usersByRoleNames.push("User");
    this.usersByRole.push(
      this.users.filter(x => x.role === "Administrator").length
    );
    this.usersByRoleNames.push("Administrator");
    //load grid
    this.gridView = this.users;
  }
  ngOnInit() {
    this.service.getAllUsers().subscribe(result => {
      if (result.isOk === true) {
        this.users = Array(100)
          .fill({})
          .map((x, idx) => ({
            id: idx,
            fullName: "USer " + idx,
            company: "Company " + idx,
            role: idx % 3 === 0 ? "Administrator" : "User",
            username: "user" + idx + "@lanteria.com"
          }));
        this.gridView = this.users;
        //this.users = result.users;
        this.loaded = true;
        this.loadChart();

        // this.changeReference.detectChanges();
        // this.staticTable = ($("#usersTable") as any).DataTable();
      }
    });
  }
  deleteUser(user: User) {
    Swal.fire({
      title: "Are you sure?",
      text: `Are you sure you want to delete '${user.fullName}' user?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        this.users = this.users.filter(x => x.id !== user.id);
        this.loadChart();
        // this.staticTable.destroy();
        // this.changeReference.detectChanges();
        // this.staticTable = ($("#usersTable") as any).DataTable();
        // this.staticTable.draw(true);
        // this.service.deleteUser(user).subscribe(resp => {
        //   if (resp.isOk) {
        //     Swal.fire(
        //       "Deleted!",
        //       `User '${resp.user.fullName}' has been deleted`,
        //       "success"
        //     );
        //   } else {
        //     Swal.fire("Error!", resp.errorMessage, "warning");
        //   }
        // });
      }
    });
  }
  public onFilter(inputValue: string): void {
    this.gridView = process(this.users, {
      filter: {
        logic: "or",
        filters: [
          {
            field: "fullName",
            operator: "contains",
            value: inputValue
          },
          {
            field: "company",
            operator: "contains",
            value: inputValue
          },
          {
            field: "role",
            operator: "contains",
            value: inputValue
          }
        ]
      }
    }).data;

    if (this.dataBinding) {
      this.dataBinding.skip = 0;
    }
  }
}
