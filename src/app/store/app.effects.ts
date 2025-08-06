import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment } from "./app.actions";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";

@Injectable()
export class CounterEffects {
  saveCount = createEffect(() => this.actions$.pipe(
    ofType(increment, decrement),
    tap((action) => {
      console.log(action);
      localStorage.setItem('count', action.value.toString())
    })
  ),
  {dispatch: false}
  );
  constructor(private actions$: Actions){}
}
