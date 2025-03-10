import { Injectable } from '@angular/core';
import { type Task } from '../components/tasks/tasks.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private users = [
    {
      id: 'u1',
      name: 'Bhuwan Poudel',
      image: 'my-pic.png'
    },
    {
      id: 'u2',
      name: 'Sudhan Poudel',
      image: 'profile-pic.png'
    },
    {
      id: 'u3',
      name: 'Khageswor Poudel',
      image: 'poudel.jpeg'
    },
    {
      id: 'u4',
      name: 'Krishna Som',
      image: 'post1.png'
    }
  ]
  private tasks = [
    {
      id: 't1',
      title: 'task1',
      description: 'do something1',
      date: '1741329475645',
      user: 'u1'
    },
    {
      id: 't2',
      title: 'task2',
      description: 'do something2',
      date: '1741329475645',
      user: 'u2'
    },
    {
      id: 't3',
      title: 'task3',
      description: 'do something3',
      date: '1741329475645',
      user: 'u3'
    },
    {
      id: 't4',
      title: 'task4',
      description: 'do something4',
      date: '1741329475645',
      user: 'u4'
    },
  ]

  getTasks(){
    return this.tasks;
  }
  getUsers(){
    return this.users;
  }

  addTask(task: Task){
    this.tasks.push(task);
  }
}
