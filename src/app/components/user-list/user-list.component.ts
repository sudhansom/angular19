import { Component, OnInit, inject } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user-service.service';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgFor } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-list',
  imports: [ NgFor, FormsModule, AsyncPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  allUsers: Subject<User[]> = new Subject<User[]>();

  userService: UserService = inject(UserService);

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.allUsers.next(users);
    });
  }

  editUser(user: User){
    this.userService.updateSelectedUser(user);
  }

}
