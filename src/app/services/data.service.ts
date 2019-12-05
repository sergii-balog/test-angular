import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { map } from "rxjs/operators";
import { AppError } from "../common/errors/app-error";
import { NotFoundError } from "../common/errors/not-found-error";
import { BadInput } from "../common/errors/bad-input-error";

export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  public getAll(): Observable<any> {
    return this.http
      .get<any>(this.url, {
        observe: "response"
      })
      .pipe(map(response => response.body))
      .pipe(catchError(this.handleError));
  }
  public create(resource: any): Observable<any> {
    return this.http
      .post(this.url, resource, {
        observe: "response"
      })
      .pipe(map(response => response.body))
      .pipe(catchError(this.handleError));
  }
  public update(resource: any): Observable<any> {
    return this.http
      .put(this.url + "/" + resource.id, resource, {
        observe: "response"
      })
      .pipe(map(response => response.body))
      .pipe(catchError(this.handleError));
  }
  public delete(id: number): Observable<any> {
    return this.http
      .delete(this.url + "/" + id, {
        observe: "response"
      })
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
