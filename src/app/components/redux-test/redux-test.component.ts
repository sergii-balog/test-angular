import { Component, OnInit, OnDestroy } from "@angular/core";
import { select, NgRedux } from "@angular-redux/store";
import { Observable } from "rxjs";
import { IAppState } from "../../redux/store";
import { Actions } from "../../redux/actions";

@Component({
  selector: "app-redux-test",
  templateUrl: "./redux-test.component.html",
  styleUrls: ["./redux-test.component.css"]
})
export class ReduxTestComponent implements OnInit, OnDestroy {
  @select() count: Observable<number>;
  private unsubscribe: () => void;

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.unsubscribe = ngRedux.subscribe(() => {
      console.log(ngRedux.getState());
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.unsubscribe();
  }

  onIncrement() {
    this.ngRedux.dispatch({ type: Actions.IncrementCount });
  }
  onDecrement() {
    this.ngRedux.dispatch({ type: Actions.DecrementCount });
  }
  onTen() {
    this.ngRedux.dispatch({ type: Actions.SetCount, count: 10 });
  }
}
