import { Component } from '@angular/core';
import { EachUserComponent } from './each-user/each-user.component';

@Component({
  selector: 'app-user',
  imports: [EachUserComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
