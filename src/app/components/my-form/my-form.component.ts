import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user-service.service';
import { concatMap, debounceTime, filter, tap } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-my-form',
  imports: [ContainerComponent, ReactiveFormsModule],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.scss'
})
export class MyFormComponent implements OnInit {

  userService: UserService = inject(UserService);
  currentUser:User = undefined;
  allUsers: User[];

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      age: new FormControl(0),
      email: new FormControl(null),
      gender: new FormControl("male"),
      address: new FormGroup({
        country: new FormControl("Nepal"),
        city: new FormControl("Lalim")
      })
    })
    this.userService.getUsers().subscribe(users => {
      this.allUsers = users;
    })

    this.userService.selectedUser.subscribe(user => {
      this.currentUser = user;
      this.updateUser(user);
    })
  }

  updateUser(user: User){
    this.form.setValue({
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      country: user.address.country,
      email: user.email,
      gender: user.gender,
    })
  }
  formSubmit(){
    // this.userService.saveData(this.form.value);
    this.userService.createUser(this.form.value).subscribe(user => {
      console.log(user);
    })
  }
}
