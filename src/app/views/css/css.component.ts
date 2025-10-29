import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { ShowMeDirective } from '../../directives/show-me.directive';
import { Highlight } from './highlight.directive';

@Component({
  selector: 'app-css',
  imports: [ContainerComponent, ShowMeDirective, Highlight],
  templateUrl: './css.component.html',
  styleUrl: './css.component.scss'
})
export class CssComponent {
  myList = [
    'https://images.unsplash.com/photo-1756916474898-a5bee9427163?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1756312148347-611b60723c7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1757865579201-693dd2080c73?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1757430289006-a7fdc4e74950?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1757392183699-ab8884a4eb05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5MXx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1757581559865-96f48eb27673?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5MHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1756786605218-28f7dd95a493?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDl8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1756678901900-0c40638facd9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjN8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1754835143820-bcf20e2e1a35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjd8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1754764972197-f1f6b3349a5d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjl8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1754835143706-75a35850fd3c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzB8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1756134904044-1cf7868cb9de?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzN8fHxlbnwwfHx8fHw%3D',
  'https://plus.unsplash.com/premium_photo-1667423711653-1ffb899172bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDB8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1756916474898-a5bee9427163?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1756312148347-611b60723c7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1757865579201-693dd2080c73?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1757430289006-a7fdc4e74950?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1757392183699-ab8884a4eb05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5MXx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1757581559865-96f48eb27673?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5MHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1756786605218-28f7dd95a493?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDl8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1756678901900-0c40638facd9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjN8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1754835143820-bcf20e2e1a35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjd8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1754764972197-f1f6b3349a5d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjl8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1754835143706-75a35850fd3c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzB8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1756134904044-1cf7868cb9de?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzN8fHxlbnwwfHx8fHw%3D',
  'https://plus.unsplash.com/premium_photo-1667423711653-1ffb899172bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDB8fHxlbnwwfHx8fHw%3D',
  ];

}
