import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ContainerComponent, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
      this.form = new FormGroup({
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null),
        email: new FormControl(null),
      });
  }

  onFormSubmit(){
    if(this.form.valid){
      console.log(this.form.value);
    }else {
      alert('Form not valid')
    }
  }
}
