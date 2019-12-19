import {
  trigger,
  state,
  animate,
  transition,
  style,
  stagger
} from "@angular/animations";

export let fade = trigger("fade", [
  state(
    "void",
    style({
      opacity: 0
    })
  ),
  transition(":enter, :leave", [animate(1000)])
]);
export let slideRight = trigger("slideRight", [
  state(
    "void",
    style({
      transform: "translateX(-100%)"
    })
  ),
  transition(":enter, :leave", [animate("500ms 50ms ease-in")])
]);
export let slideLeft = trigger("slideLeft", [
  state(
    "void",
    style({
      transform: "translateX(100%)"
    })
  ),
  transition(":enter, :leave", [animate("700ms 50ms ease-out")])
]);

export let expandCollapse = trigger("expandCollapse", [
  state(
    "collapsed",
    style({
      height: 0,
      overflow: "hidden",
      paddingTop: 0,
      paddingBottom: 0
    })
  ),
  transition("collapsed=>expanded", [animate("300ms ease-out")]),
  transition("expanded=>collapsed", [animate("300ms ease-in")])
]);
