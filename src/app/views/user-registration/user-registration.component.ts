import { Component, OnInit, inject } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { MyFormComponent } from '../../components/my-form/my-form.component';
import { NgIf } from "../../../../node_modules/@angular/common/index";
import { UserService } from '../../services/user-service.service';
import { User } from '../../models/user';
import { EachUserComponent } from '../../components/each-user/each-user.component';
import { UserListComponent } from '../../components/user-list/user-list.component';
@Component({
  selector: 'app-user-registration',
  imports: [ContainerComponent, FormsModule, RouterLink, MyFormComponent, UserListComponent],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.scss'
})
export class UserRegistrationComponent {
  userService: UserService = inject(UserService);

  showForm:boolean = false;
  selectedGender: string = 'male';
  country: string = 'Nepal';
  formSubmit(form: NgForm){
    console.log(form);
  }
}
