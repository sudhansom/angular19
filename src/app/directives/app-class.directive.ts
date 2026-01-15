import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class AppClassDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() set appClass(value: Object) {
    let entries = Object.entries(value);
    for(let entry of entries){
      let [className, condition]= entry;
      if(condition){
        this.renderer.addClass(this.element.nativeElement, className);
      }
    }
  }

}
