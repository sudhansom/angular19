import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-user-registration',
  imports: [ContainerComponent, FormsModule, RouterLink],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.scss'
})
export class UserRegistrationComponent {
  selectedGender: string = 'male';
  country: string = 'Nepal';
formSubmit(form: NgForm){
  console.log(form);
}
}
