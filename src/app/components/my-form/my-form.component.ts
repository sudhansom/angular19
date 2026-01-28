import { Component, ViewChild, inject } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { NgForm, FormsModule } from '@angular/forms';
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-my-form',
  imports: [ContainerComponent, FormsModule],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.scss'
})
export class MyFormComponent {

  userService: UserService = inject(UserService);

  @ViewChild('form') form: NgForm;
  formSubmit(){
    // this.userService.saveData(this.form.value);
    this.userService.createUser(this.form.value).subscribe(user => {
      console.log(user);
    })
  }
}
