import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example',
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent implements OnChanges, 
  OnInit, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewChecked,
  AfterViewInit, 
  DoCheck,
  OnDestroy {
 title = "New Component";
 @Input()message: string;

 ngOnChanges(changes: SimpleChanges): void {
   console.log("onChanges called...");
   console.log('Changes: ', changes);
 }

 ngAfterContentChecked(): void {
   console.log('AfterContentChecked');
 }
 ngAfterViewChecked(): void {
   console.log('AfterViewChecked....')
 }
 ngDoCheck(): void {
   console.log('DoCheck...')
 }
 ngOnInit(): void {
   console.log('OnInit...')
 }
 ngAfterViewInit(): void {
   console.log('AfterViewInit')
 }
 ngAfterContentInit(): void {
   console.log('AfterContentInit...')
 }
 
 ngOnDestroy(): void {
  console.log('Destroyed....')
}
}
