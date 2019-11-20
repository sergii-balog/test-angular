import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  private serviceUrl = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<any> {
    return this.http.get<any>(this.serviceUrl, {
      observe: "response"
    });
  }
  public addService(service: any): Observable<any> {
    return this.http.post(this.serviceUrl, service, {
      observe: "response"
    });
  }
}
