import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement } from '../../store/app.actions';

@Component({
  selector: 'app-counter',
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{counter: number}>){
    this.count$ = store.select('counter');
  }

  decrement(){
    this.store.dispatch(decrement({value:3}))
  }
  increment(){
    this.store.dispatch(increment({value: 3}))
  }
}
