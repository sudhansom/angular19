import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[showMe]'
})
export class ShowMeDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {

   }
   @Input() set showMe(show: Boolean){
    if(!show){
      this.renderer.addClass(this.el.nativeElement, "do-not-show" )
    }
   }

}
