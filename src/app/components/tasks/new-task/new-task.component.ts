import { Component, inject, output } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { ContainerComponent } from '../../container/container.component';
import { FormsModule } from '@angular/forms';
import { type Task } from '../tasks.model';
import { DataServiceService } from '../../../services/data-service.service';

@Component({
  selector: 'app-new-task',
  imports: [ContainerComponent, CardComponent, FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
id = '';
title = '';
desc = '';
user = '';
hideForm = output();


dataService = inject(DataServiceService)


onSubmit(){
  if(!this.id || !this.title || !this.desc || !this.user){
    alert('all the fields need to be fill up')
    return
  }
  const newTask = {
    id: this.id,
    title: this.title,
    description: this.desc,
    date: new Date().getTime().toString(),
    user: this.user
  }
  this.dataService.addTask(newTask);
  this.hideForm.emit();
}
}
