import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { ContainerComponent } from '../../container/container.component';

@Component({
  selector: 'app-new-task',
  imports: [ContainerComponent, CardComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {

}
