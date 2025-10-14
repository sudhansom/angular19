import { Component, ViewChild } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  imports: [ContainerComponent, FormsModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {
    @ViewChild('form') form: NgForm;

    formSubmit(){
      console.log(this.form.value);
      console.log(this.form.valid);

    }

}
