import { ErrorHandler } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import {AppError} from './errors/app-error';

export class AppErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    if (error instanceof AppError) {
     alert("An unexpected error occured: " + error.originalError.message);
    }
    else alert("Unexpected error occured.");
    console.log("Unexpected error occured.", error);
  }
}
