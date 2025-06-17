import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-assignment',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-assignment.component.html',
  styleUrl: './reactive-assignment.component.scss'
})
export class ReactiveAssignmentComponent implements OnInit {
  form: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null, [Validators.email, Validators.required])
    })
  }

  onFormSubmit(){
    console.log(this.form);
  }

}
