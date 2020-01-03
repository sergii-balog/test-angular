import { Component, OnInit, OnDestroy } from "@angular/core";
import Swal, { SweetAlertIcon } from "sweetalert2";
import * as signalR from "@aspnet/signalr";
import { AppClientError } from "../common/errors/app-client-error";
import { throwError } from "rxjs";
import { AppError } from "../common/errors/app-error";

@Component({
  selector: "app-signalr-test",
  templateUrl: "./signalr-test.component.html",
  styleUrls: ["./signalr-test.component.css"]
})
export class SignalrTestComponent implements OnInit, OnDestroy {
  constructor() {}
  title: string;
  type: string;
  text: string;
  serverName: string;
  connection: signalR.HubConnection;

  ngOnDestroy() {
    // this.connection.off("BroadcastMessage");
    this.connection
      .stop()
      .then(() => {
        console.log("Disconnected from SignalR...");
      })
      .catch(err => {
        return console.error(err.toString());
      });
  }
  sendAll() {
    this.connection.invoke(
      "NotifyAll",
      "info",
      "Message from client",
      "Hi all other subscribers!"
    );
  }
  sendCaller() {
    this.connection.invoke(
      "NotifyCaller",
      "info",
      "Message from client",
      "Hi only me!"
    );
  }
  sendGroup() {
    this.connection.invoke(
      "NotifyGroup",
      "info",
      "Message from client",
      "Hi group mates!"
    );
  }
  async ngOnInit() {
    this.connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl("http://localhost:5000/messages") // , { accessTokenFactory: () => this.loginToken })
      .build();

    try {
      await this.connection.start();
      console.log("Connected to SignalR...");
      this.connection.invoke("GetServerName").then(x => (this.serverName = x));
    } catch (err) {
      throw new AppClientError("Can't connect to SignalR", err);
    }

    this.connection.on(
      "BroadcastMessage",
      (type: string, title: string, text: string) =>
        this.processMessage(type, title, text)
    );
    // this.connection.stream("BroadcastMessage").subscribe({
    //   next: item => {
    //     console.log(item); // <= this works: I can get the data from server
    //   },
    //   error: err => {
    //     console.log(err);
    //   },
    //   complete: () => {
    //     console.log("finished streaming");
    //   }
    // });
  }
  private processMessage(type: string, title: string, text: string) {
    this.title = title;
    this.text = text;
    this.type = type;

    Swal.fire(this.title, this.text, this.type as SweetAlertIcon);
  }
}
