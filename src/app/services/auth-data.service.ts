import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { map } from "rxjs/operators";
import { AppError } from "../common/errors/app-error";
import { NotFoundError } from "../common/errors/not-found-error";
import { BadInput } from "../common/errors/bad-input-error";
import { IIDentifier } from "../models/identifier";
import { AuthService } from "./auth.service";

export class AuthDataService {
  serviceUrl: string;
  options: object = {
    observe: "response"
  };
  constructor(
    private url: string,
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.serviceUrl = url;
  }

  protected getAll<T>(): Observable<T> {
    return this.getAllCusomUrl(this.url);
  }
  protected getAllCusomUrl<T>(url: string): Observable<T> {
    return this.http
      .get<T>(url, {
        observe: "response",
        headers: new HttpHeaders({
          Authorization: "Bearer " + this.authService.currentUser.token
        })
      })
      .pipe(map(response => response.body))
      .pipe(catchError(this.handleError));
  }
  protected get<ResoutceT extends IIDentifier, ResponceT>(
    resource: ResoutceT
  ): Observable<ResponceT> {
    return this.http
      .get<ResponceT>(this.url + "/" + resource.id, {
        observe: "response",
        headers: new HttpHeaders({
          Authorization: "Bearer " + this.authService.currentUser.token
        })
      })
      .pipe(map(response => response.body))
      .pipe(catchError(this.handleError));
  }
  protected create<ResoutceT, ResponceT>(
    resource: ResoutceT
  ): Observable<ResponceT> {
    return this.http
      .post<ResponceT>(this.url, resource, {
        observe: "response",
        headers: new HttpHeaders({
          Authorization: "Bearer " + this.authService.currentUser.token
        })
      })
      .pipe(map(response => response.body))
      .pipe(catchError(this.handleError));
  }
  protected update<ResoutceT extends IIDentifier, ResponceT>(
    resource: ResoutceT
  ): Observable<ResponceT> {
    return this.http
      .put<ResponceT>(this.url + "/" + resource.id, resource, {
        observe: "response",
        headers: new HttpHeaders({
          Authorization: "Bearer " + this.authService.currentUser.token
        })
      })
      .pipe(map(response => response.body))
      .pipe(catchError(this.handleError));
  }
  protected delete<ResoutceT extends IIDentifier, ResponceT>(
    resource: ResoutceT
  ): Observable<ResponceT> {
    return this.http
      .delete<ResponceT>(this.url + "/" + resource.id, {
        observe: "response",
        headers: new HttpHeaders({
          Authorization: "Bearer " + this.authService.currentUser.token
        })
      })
      .pipe(map(response => response.body))
      .pipe(catchError(this.handleError));
  }
  private handleError(error: Response) {
    if (error.status === 404) {
      return throwError(new NotFoundError(error));
    } else if (error.status === 400) {
      return throwError(new BadInput(error));
    } else {
      return throwError(new AppError(error));
    }
  }
}
