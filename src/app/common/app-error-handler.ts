import { ErrorHandler } from "@angular/core";
import { AppError } from "./errors/app-error";
import Swal from "sweetalert2";
import { HttpErrorResponse } from "@angular/common/http";
import { AppClientError } from "./errors/app-client-error";

export class AppErrorHandler implements ErrorHandler {
  handleError(error: Error | Response): void {
    const clientErrorMessage = AppClientError.LastErrorMessage;
    if (error instanceof AppError) {
      Swal.fire("Unexpected error!", error.originalError.message, "error");
    } else if (clientErrorMessage) {
      Swal.fire("Unexpected error!", clientErrorMessage, "error");
    } else {
      Swal.fire("Unexpected error!", "Unexpected error occured.", "error");
    }
    if (!clientErrorMessage) {
      console.log("Unexpected error occured.", error);
    }
  }
}
