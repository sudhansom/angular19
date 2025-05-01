import { Component, output, input, computed } from '@angular/core';
@Component({
  selector: 'app-each-user',
  imports: [],
  templateUrl: './each-user.component.html',
  styleUrl: './each-user.component.scss'
})
export class EachUserComponent {
  id = input.required<string>();
  name = input.required<string>();
  image = input.required<string>();

  clickUser = output<string>();

  imagePath = computed(()=> "assets/images/" + this.image())


  onClick(){
    this.clickUser.emit(this.id());
  }
}
