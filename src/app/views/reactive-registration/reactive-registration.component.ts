import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormsModule, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-registration',
  imports: [ContainerComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './reactive-registration.component.html',
  styleUrl: './reactive-registration.component.scss'
})
export class ReactiveRegistrationComponent implements OnInit {
  reactiveForm: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      address: new FormGroup({
        country: new FormControl(null),
        street: new FormControl(null),
        city: new FormControl(null),
        region: new FormControl(null),
        postal: new FormControl(null)
      }),
      skills: new FormArray([
        new FormControl(null, Validators.required),
      ]
      ),
      experience: new FormArray([
        new FormGroup({
          company: new FormControl(null),
          position: new FormControl(null),
          startDate: new FormControl(null),
          endDate: new FormControl(null)
        })
      ]),
    })
  }

submitForm(){
  console.log('form submitted')
  console.log(this.reactiveForm);
}
addSkill(){
  const controls = <FormArray>this.reactiveForm.get('skills');
  controls.push(new FormControl(null, Validators.required))
}
deleteSkill(index: number){
  const controls = <FormArray>this.reactiveForm.get('skills');
  controls.removeAt(index);
}
}
