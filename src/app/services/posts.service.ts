import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { AppError } from "../common/errors/app-error";
import { NotFoundError } from "../common/errors/not-found-error";
import { BadInput } from "../common/errors/bad-input-error";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  private serviceUrl = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<any> {
    return this.http
      .get<any>(this.serviceUrl, {
        observe: "response"
      })
      .pipe(catchError(this.handleError));
  }
  public addPost(post: any): Observable<any> {
    return this.http
      .post(this.serviceUrl, post, {
        observe: "response"
      })
      .pipe(catchError(this.handleError));
  }
  public deletePost(id: number): Observable<any> {
    return this.http
      .delete(this.serviceUrl + "/" + id, {
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
