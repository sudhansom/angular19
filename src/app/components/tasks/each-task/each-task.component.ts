import { Component, Input, input } from '@angular/core';
import { ContainerComponent } from '../../container/container.component';

@Component({
  selector: 'app-each-task',
  imports: [ContainerComponent],
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
