import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { MyFormComponent } from '../../components/my-form/my-form.component';
import { NgIf } from "../../../../node_modules/@angular/common/index";
@Component({
  selector: 'app-user-registration',
  imports: [ContainerComponent, FormsModule, RouterLink, MyFormComponent],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.scss'
})
export class UserRegistrationComponent {
  showForm:boolean = false;
  selectedGender: string = 'male';
  country: string = 'Nepal';
  formSubmit(form: NgForm){
    console.log(form);
  }
}
