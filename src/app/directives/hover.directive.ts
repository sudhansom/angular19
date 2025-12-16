import { Directive, Host, HostBinding } from "@angular/core";

@Directive({
    selector: '[appHover]'
})
export class HoverDirective {

    @HostBinding('style.background') background: string = 'purple';
    @HostBinding('style.border') border: string = '2px solid green';
    @HostBinding('style.color') color: string = '#fff';
    @HostBinding('style.padding') padding: string = '3px 12px';
    @HostBinding('style.marginTop') margin: string = '12px';

}