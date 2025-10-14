import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  imports: [ContainerComponent, FormsModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {
    formSubmit(form: NgForm){
      console.log(form.value);
      console.log(form.valid);

    }

}
