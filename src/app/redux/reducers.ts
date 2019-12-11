import { IAppState } from "./store";
import { Actions, IAction } from "./actions";
import { tassign } from "tassign";

export function rootReducer(state: IAppState, action: IAction): IAppState {
  switch (action.type) {
    case Actions.IncrementCount:
      return tassign(state, { count: state.count + 1 });
    case Actions.DecrementCount:
      return tassign(state, { count: state.count - 1 });
    case Actions.SetCount:
      return tassign(state, { count: action.count });
  }
  return state;
}
