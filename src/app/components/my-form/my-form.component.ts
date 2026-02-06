import { Component, OnInit, inject } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { ReactiveFormsModule, FormGroup, FormControl, FormArray } from '@angular/forms';
import { UserService } from '../../services/user-service.service';
import { CommonModule } from '@angular/common';

import { User } from '../../models/user';

@Component({
  selector: 'app-my-form',
  imports: [ContainerComponent, ReactiveFormsModule, CommonModule],
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
      }),
      skills: new FormArray([
        new FormControl(null),
      ])
    })
    this.userService.getUsers().subscribe(users => {
      this.allUsers = users;
    })

    this.userService.selectedUser.subscribe(user => {
      this.currentUser = user;
      this.updateUser(user);
    })

    this.form.get('firstName').valueChanges.subscribe(value => {
      console.log('Value changes to the firstName triggered:', value);
    })
  }

  updateUser(user: User){
    this.form.setValue({
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      email: user.email,
      gender: user.gender,
      address: {
        country: user.address.country,
        city: user.address.city
      }
    })
  }
  formSubmit(){
    // this.userService.saveData(this.form.value);
    this.userService.createUser(this.form.value).subscribe(user => {
      console.log(user);
    })
  }
  addSkill(){
    (<FormArray>this.form.controls['skills']).push(new FormControl(null));
  }
  removeSkill(index: number){
    const controls = (<FormArray>this.form.controls['skills']);
    controls.removeAt(index);
  }


}
