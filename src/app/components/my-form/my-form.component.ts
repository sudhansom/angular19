import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { NgForm, FormsModule } from '@angular/forms';
import { UserService } from '../../services/user-service.service';
import { concatMap, debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-my-form',
  imports: [ContainerComponent, FormsModule],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.scss'
})
export class MyFormComponent implements AfterViewInit {

  userService: UserService = inject(UserService);

  @ViewChild('form') form: NgForm;

  ngAfterViewInit(): void {
    this.form.valueChanges.pipe(
      filter(() => this.form.valid),
      debounceTime(10000),
      concatMap(changes => this.updateForm(changes))
    ).subscribe(value => {
      console.log(value);
      console.log('form is valid:',this.form.valid);

    })
  }
  formSubmit(){
    // this.userService.saveData(this.form.value);
    this.userService.createUser(this.form.value).subscribe(user => {
      console.log(user);
    })
  }
  updateForm(changes){
    return this.userService.updateUser('d23dea54-f211-4f06-9e41-b2366acdcede', changes);
  }
}
