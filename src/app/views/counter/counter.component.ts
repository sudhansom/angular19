import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IncrementAction, DecrementAction } from '../../store/app.actions';

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
    this.store.dispatch(new DecrementAction(3))
  }
  increment(){
    this.store.dispatch(new IncrementAction(3))
  }
}
