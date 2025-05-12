import { Directive } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
      '(click)': 'confirmTheLink($event)'
    }
  })
export class SafeLinkDirective {
  confirmTheLink(event: MouseEvent){
    const confirmation = window.confirm('Do you want to leave the page?');
    console.log(confirmation);
    if(confirmation){
      return;
    }
    event.preventDefault();
  }
}
