import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { map } from "rxjs/operators";
import { AppError } from "../common/errors/app-error";
import { NotFoundError } from "../common/errors/not-found-error";
import { BadInput } from "../common/errors/bad-input-error";
import { IIDentifier } from "../models/identifier";

export class DataService<T extends IIDentifier> {
  serviceUrl: string;
  constructor(private url: string, private http: HttpClient) {
    this.serviceUrl = url;
  }

  public getAll(): Observable<T[]> {
    return this.http
      .get<T[]>(this.url, {
        observe: "response"
      })
      .pipe(map(response => response.body))
      .pipe(catchError(this.handleError));
  }
  public create(resource: T): Observable<T> {
    return this.http
      .post<T>(this.url, resource, {
        observe: "response"
      })
      .pipe(map(response => response.body))
      .pipe(catchError(this.handleError));
  }
  public update(resource: T): Observable<T> {
    return this.http
      .put<T>(this.url + "/" + resource.id, resource, {
        observe: "response"
      })
      .pipe(map(response => response.body))
      .pipe(catchError(this.handleError));
  }
  public delete(id: number): Observable<T> {
    return this.http
      .delete<T>(this.url + "/" + id, {
        observe: "response"
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
