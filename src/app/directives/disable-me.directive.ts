import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisableMe]'
})
export class DisableMeDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() set appDisableMe(disable: boolean){
    if(disable){
      this.renderer.addClass(this.element.nativeElement, 'disable-me');
    }else {
      this.renderer.removeClass(this.element.nativeElement, 'disable-me');
    }
  }

}
