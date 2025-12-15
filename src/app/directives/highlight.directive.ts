import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')onMouseIn(){
    this.renderer.addClass(this.element.nativeElement, 'highlight-me');
  }
  @HostListener('mouseout') onMouseOut(){
    this.renderer.removeClass(this.element.nativeElement, 'highlight-me');
  }

}
