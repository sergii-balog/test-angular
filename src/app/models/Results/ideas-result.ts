import { BaseResult } from "./base-result";
import { Idea } from "./idea";

export interface IdeasResult extends BaseResult {
  ideas: Idea[];
}
