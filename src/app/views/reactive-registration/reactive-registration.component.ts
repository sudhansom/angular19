import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-registration',
  imports: [ContainerComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './reactive-registration.component.html',
  styleUrl: './reactive-registration.component.scss'
})
export class ReactiveRegistrationComponent implements OnInit {
  reactiveForm: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(null, Validators.required),

    })
  }

submitForm(){
  console.log(this.reactiveForm);
}
}
