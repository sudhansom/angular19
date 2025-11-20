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
   console.log("Child onChanges called...");
   console.log('ngONChanges: ', changes);
 }

 ngAfterContentChecked(): void {
   console.log('Child AfterContentChecked');
 }
 ngAfterViewChecked(): void {
   console.log('Child AfterViewChecked....')
 }
 ngDoCheck(): void {
   console.log('Child DoCheck...')
 }
 ngOnInit(): void {
   console.log('Child OnInit...')
 }
 ngAfterViewInit(): void {
   console.log('Child AfterViewInit')
 }
 ngAfterContentInit(): void {
   console.log('Child AfterContentInit...')
 }
 
 ngOnDestroy(): void {
  console.log('Child Destroyed....')
}
}
