import { Directive } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
  })
export class SafeLinkDirective {
  constructor(){
    console.log('safe-link directive applied.')
  }
}
