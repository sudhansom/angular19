import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appHighlight]',
})
export class highlight {
  constructor(private element: ElementRef, private renderer: Renderer2){
  }

  @HostListener('mouseenter') OnMouseEnter(){
    this.renderer.addClass(this.element.nativeElement, 'highlight-me');
  }

  @HostListener('mouseout') OnMouseLeave(){
    this.renderer.addClass(this.element.nativeElement, 'highlight-me');
  }
}
