import { ErrorHandler } from "@angular/core";
import { AppError } from "./errors/app-error";
import Swal from "sweetalert2";

export class AppErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    if (error instanceof AppError) {
      Swal.fire("Unexpected error!", error.originalError.message, "error");
    } else {
      Swal.fire("Unexpected error!", "Unexpected error occured.", "error");
    }
    console.log("Unexpected error occured.", error);
  }
}
