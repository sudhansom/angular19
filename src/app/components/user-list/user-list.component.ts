import { Component, OnInit, inject } from '@angular/core';
import { EachUserComponent } from '../each-user/each-user.component';
import { User } from '../../models/user';
import { UserService } from '../../services/user-service.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [EachUserComponent, NgFor, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  allUsers: User[] = [];

  userService: UserService = inject(UserService);

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.allUsers = users;
      console.log('Users from the User List: ',users)
    });
  }

  editUser(user: User){
    console.log('User to be edited:: ', user);
    this.userService.updateSelectedUser(user);
  }

}
