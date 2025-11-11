import { Component, Input, TemplateRef } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slots',
  imports: [ ContainerComponent, CommonModule ],
  templateUrl: './slots.component.html',
  styleUrl: './slots.component.scss'
})
export class SlotsComponent {

  showTemplate = false;

  @Input() ngTempl: TemplateRef<any>;

}
