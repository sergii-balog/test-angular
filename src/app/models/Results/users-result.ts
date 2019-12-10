import { BaseResult } from "./base-result";
import { User } from "./user";

export interface UsersResult extends BaseResult {
  users: User[];
}
