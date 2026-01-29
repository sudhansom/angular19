import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { NgForm, FormsModule } from '@angular/forms';
import { UserService } from '../../services/user-service.service';
import { concatMap, debounceTime, filter, tap } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-my-form',
  imports: [ContainerComponent, FormsModule],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.scss'
})
export class MyFormComponent implements OnInit, AfterViewInit {

  userService: UserService = inject(UserService);
  currentUser:User = undefined;
  allUsers: User[];

  @ViewChild('form') form: NgForm;

  ngOnInit(): void {
    this.userService.selectedUser.subscribe(user => {
      this.currentUser = user;
      console.log("user Selected::::", this.currentUser);
      this.form.value.firstName = "Hhellosss";
    })
    this.userService.getUsers().subscribe(users => {
      console.log('All Users: ', users);
    })
  }

  ngAfterViewInit(): void {
    this.form.valueChanges.pipe(
      filter(() => this.form.valid),
      debounceTime(10000),
      concatMap(changes => this.updateForm(changes))
    ).subscribe(
      value => {
      // console.log(value);
      // console.log('form is valid:',this.form.valid);

    })
  }
  formSubmit(){
    // this.userService.saveData(this.form.value);
    this.userService.createUser(this.form.value).subscribe(user => {
      console.log(user);
    })
  }
  updateForm(changes){
      if(this.currentUser){
        return this.userService.updateUser('d23dea54-f211-4f06-9e41-b2366acdcede', changes);
      }else {
        return changes
      }
  }
}
