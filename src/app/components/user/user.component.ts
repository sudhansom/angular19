import { Component, inject, output } from '@angular/core';
import { EachUserComponent } from './each-user/each-user.component';
import { DataServiceService } from '../../services/data-service.service';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [EachUserComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  clickUser = output<string>()
users: User[] = [];
dataService = inject(DataServiceService);

constructor(){
  this.users = this.dataService.getUsers();
}

onClickUser(id: string){
  this.clickUser.emit(id)
}
}
