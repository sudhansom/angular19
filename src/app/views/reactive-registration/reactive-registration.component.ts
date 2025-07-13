import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormsModule, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { noSpaceAllowed } from '../../validators/noSpaceAllowed.validators';

import { ContainerComponent } from '../../components/container/container.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-reactive-registration',
  imports: [ContainerComponent, CommonModule, FormsModule, ReactiveFormsModule, RouterOutlet, RouterModule],
  templateUrl: './reactive-registration.component.html',
  styleUrl: './reactive-registration.component.scss'
})
export class ReactiveRegistrationComponent implements OnInit {
  reactiveForm: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl('',[ Validators.required, noSpaceAllowed]),
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
      experiences: new FormArray([
      ]),
    })
  }

submitForm(){
  console.log('form submitted')
  console.log('form value', this.reactiveForm.value);
}
addSkill(){
  const controls = <FormArray>this.reactiveForm.get('skills');
  controls.push(new FormControl(null, Validators.required))
}
deleteSkill(index: number){
  const controls = <FormArray>this.reactiveForm.get('skills');
  controls.removeAt(index);
}
addExperience(){
  const exp = new FormGroup({
    company: new FormControl(null),
    position: new FormControl(null),
    startDate: new FormControl(null),
    endDate: new FormControl(null)
  })
  const controls = <FormArray>this.reactiveForm.get('experiences');
  controls.push(exp);
}
deleteExperience(index: number){
  const controls = <FormArray>this.reactiveForm.get('experiences');
  controls.removeAt(index);
}
canExit(){
  if(this.reactiveForm.value.firstName){
    return confirm('Form is not Submitted. Are you sure you want to leave the page???');
  }else {
    return true;
  }
}
}
