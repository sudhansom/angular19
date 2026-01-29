import { Component, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-each-user',
  imports: [],
  templateUrl: './each-user.component.html',
  styleUrl: './each-user.component.scss'
})
export class EachUserComponent {
  @Input() user: User;
}
