import { Component, Input, input, output } from '@angular/core';
import { ContainerComponent } from '../../container/container.component';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { HighlightDirective } from '../../../directives/highlight.directive';

@Component({
  selector: 'app-each-task',
  imports: [ContainerComponent, DatePipe, CardComponent, HighlightDirective],
  templateUrl: './each-task.component.html',
  styleUrl: './each-task.component.scss'
})
export class EachTaskComponent {
@Input({required: true}) id!: string
complete = output<string>();
// id = input.required<string>()
title = input.required<string>()
description = input.required<string>()
date = input.required<string>()

onComplete(){
  this.complete.emit(this.id);
}
}
