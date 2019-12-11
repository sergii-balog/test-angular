import { Actions } from "./actions";

export interface IAppState {
  count: number;
}

export const initialApplicationState: IAppState = { count: 3 };
