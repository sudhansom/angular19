import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task = new EventEmitter<string>();

  onCreate(value: string){
    this.task.emit(value);
  }
}
