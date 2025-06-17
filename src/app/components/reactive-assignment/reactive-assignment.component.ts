import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-assignment',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-assignment.component.html',
  styleUrl: './reactive-assignment.component.scss'
})
export class ReactiveAssignmentComponent implements OnInit {
  form: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'hobbies': new FormArray([])
    })
  }

  onFormSubmit(){
    console.log(this.form);
  }

  onAddHobbies(){
    console.log('clicked....', this.form)
    const hobby = new FormControl(null);
    (<FormArray>this.form.get('hobbies')).push(hobby);
  }

}
