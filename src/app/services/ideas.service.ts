import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { AuthDataService } from "./auth-data.service";
import { IdeasResult } from "../models/Results/ideas-result";
import { Observable } from "rxjs";
import { Idea } from "./../models/Results/idea";
import { IdeaResult } from "../models/Results/idea-result";

@Injectable({
  providedIn: "root"
})
export class IdeasService extends AuthDataService {
  constructor(http: HttpClient, authService: AuthService) {
    super("https://feedback.lanteria.com/ideas", http, authService);
  }
  public getAllIdeas(): Observable<IdeasResult> {
    return this.getAllCusomUrl<IdeasResult>(
      "https://feedback.lanteria.com/ideas/all"
    );
  }
  public deleteIdea(idea: Idea): Observable<IdeaResult> {
    return this.delete<Idea, IdeaResult>(idea);
  }
  public createIdea(idea: Idea): Observable<IdeaResult> {
    return this.create<Idea, IdeaResult>(idea);
  }
  public updateIdea(idea: Idea): Observable<IdeaResult> {
    return this.update<Idea, IdeaResult>(idea);
  }
  public getIdea(idea: Idea): Observable<IdeaResult> {
    return this.get<Idea, IdeaResult>(idea);
  }
}
