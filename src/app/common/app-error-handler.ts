import { ErrorHandler } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

export class AppErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      alert(`Http error: ${error.message}`);
    }
    alert("Unexpected error occured.");
    console.log(error);
  }
}
