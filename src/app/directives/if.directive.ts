import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  constructor(private element: TemplateRef<any>, private view: ViewContainerRef) { }

  @Input() set display(value: boolean){
    if(value){
      this.view.createEmbeddedView(this.element);
    }else {
      this.view.clear();
    }
  }

}
