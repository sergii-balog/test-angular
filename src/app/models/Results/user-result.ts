import { BaseResult } from "./base-result";
import { User } from "./user";

export interface UserResult extends BaseResult {
  user: User;
}
