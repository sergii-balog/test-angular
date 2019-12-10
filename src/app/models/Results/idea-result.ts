import { BaseResult } from "./base-result";
import { Idea } from "./idea";

export interface IdeaResult extends BaseResult {
  idea: Idea;
}
