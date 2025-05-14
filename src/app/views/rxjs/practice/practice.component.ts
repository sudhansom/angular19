import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { ContainerComponent } from '../../../components/container/container.component';

@Component({
  selector: 'app-practice',
  imports: [ContainerComponent, AsyncPipe],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.scss'
})
export class PracticeComponent {

}
