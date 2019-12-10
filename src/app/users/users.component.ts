import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { UsersService } from "../services/users.service";
import * as $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";
import Swal from "sweetalert2";
import { User } from "../models/Results/user";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[];
  staticTable: any;
  loaded: boolean;

  constructor(
    private service: UsersService,
    private changeReference: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.service.getAllUsers().subscribe(result => {
      if (result.isOk === true) {
        this.users = result.users;
        this.loaded = true;
        this.changeReference.detectChanges();
        this.staticTable = ($("#usersTable") as any).DataTable();
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
        this.staticTable.destroy();
        this.changeReference.detectChanges();
        this.staticTable = ($("#usersTable") as any).DataTable();
        this.staticTable.draw(true);
        this.service.deleteUser(user).subscribe(resp => {
          if (resp.isOk) {
            Swal.fire(
              "Deleted!",
              `User '${resp.user.fullName}' has been deleted`,
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
