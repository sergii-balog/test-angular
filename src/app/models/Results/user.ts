import { IIDentifier } from "./../identifier";

export interface User extends IIDentifier {
  fullName: string;
  company: string;
  username: string;
  role: string;
}
