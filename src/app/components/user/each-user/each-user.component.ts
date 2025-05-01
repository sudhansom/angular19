import { Component, Output, Input, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-each-user',
  imports: [],
  templateUrl: './each-user.component.html',
  styleUrl: './each-user.component.scss'
})
export class EachUserComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) name!: string;
  @Input({required: true}) image!: string;

  @Output() clickUser = new EventEmitter();


  get imagePath(){
    return "src/assets/images" + this.image;
  }

  onClick(){
    this.clickUser.emit(this.id);
  }
}
