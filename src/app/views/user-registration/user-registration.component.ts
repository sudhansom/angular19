import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-user-registration',
  imports: [ContainerComponent, FormsModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.scss'
})
export class UserRegistrationComponent {
formSubmit(form: NgForm){
  console.log(form);
}
}
