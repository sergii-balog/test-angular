import { IUser } from "./user";

export interface ILoginResponse {
  isOk: boolean;
  errorMessage: string;
  user: IUser;
}
