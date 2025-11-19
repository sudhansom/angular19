import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example',
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent implements OnChanges {
 title = "New Component";
 @Input()message: string;

 ngOnChanges(changes: SimpleChanges): void {
   console.log("onChanges called...");
   console.log('Changes: ', changes);
 }
}
