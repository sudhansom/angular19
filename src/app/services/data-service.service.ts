import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private tasks = [
    {
      id: 't1',
      title: 'task1',
      description: 'do something1',
      date: '1741329475645'
    },
    {
      id: 't2',
      title: 'task2',
      description: 'do something2',
      date: '1741329475645'
    },
    {
      id: 't3',
      title: 'task3',
      description: 'do something3',
      date: '1741329475645'
    },
    {
      id: 't4',
      title: 'task4',
      description: 'do something4',
      date: '1741329475645'
    },
  ]

  getTasks(){
    return this.tasks;
  }
}
