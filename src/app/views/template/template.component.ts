import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';

@Component({
  selector: 'app-template',
  imports: [ContainerComponent],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {

}
