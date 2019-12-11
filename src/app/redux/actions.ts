export class Actions {
  public static IncrementCount = "INCREMENT_COUNT";
  public static DecrementCount = "DECREMENT_COUNT";
  public static SetCount = "SET_COUNT";
}
export interface IAction {
  type: string;
  count?: number;
}
