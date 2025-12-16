import { Directive, Host, HostBinding } from "@angular/core";

@Directive({
    selector: '[appHover]'
})
export class HoverDirective {

    @HostBinding('style.background') background: string = 'purple';
    @HostBinding('style.border') border: string = '2px solid green';

}