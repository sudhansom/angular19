import { Component, ViewChild } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  imports: [ContainerComponent, FormsModule],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.scss'
})
export class MyFormComponent {

  @ViewChild('form') form: NgForm;
  formSubmit(){
    console.log(this.form.value);
  }
}
