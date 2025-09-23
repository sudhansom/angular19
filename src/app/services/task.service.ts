import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // task = new EventEmitter<string>();
  task = new Subject<string>();

  onCreate(value: string){
    // this.task.emit(value);
    this.task.next(value);
  }
}
