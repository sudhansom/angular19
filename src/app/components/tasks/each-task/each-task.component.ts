import { Component, Input, input } from '@angular/core';
import { ContainerComponent } from '../../container/container.component';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-each-task',
  imports: [ContainerComponent, DatePipe, CardComponent],
  templateUrl: './each-task.component.html',
  styleUrl: './each-task.component.scss'
})
export class EachTaskComponent {
@Input({required: true}) id!: string
// id = input.required<string>()
title = input.required<string>()
description = input.required<string>()
date = input.required<string>()
}
