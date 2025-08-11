import { AsyncPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { effect } from '@angular/core';
import { Observable } from 'rxjs';
import { increment, decrement } from '../../store/app.actions';
import { selectCount, selectDoubleCount } from '../../store/app.selector';

@Component({
  selector: 'app-counter',
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count$: Observable<number>;
  doubleCount$: Observable<number>;
  info = signal('');

  constructor(private store: Store<{counter: number}>){
    this.count$ = store.select(selectCount);
    this.doubleCount$ = store.select(selectDoubleCount);
  }


  decrement(){
    this.store.dispatch(decrement({value: 3}));
    this.info.set('Decreased!');
  }
  increment(){
    this.store.dispatch(increment({value: 3}))
    this.info.set('Increased!');
  }
}
