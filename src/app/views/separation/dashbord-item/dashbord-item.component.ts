import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashbord-item',
  imports: [],
  templateUrl: './dashbord-item.component.html',
  styleUrl: './dashbord-item.component.scss'
})
export class DashbordItemComponent {
  @Input({required: true}) image!: {src: string; altText: string;};
  @Input({required: true}) title!: string;
}
