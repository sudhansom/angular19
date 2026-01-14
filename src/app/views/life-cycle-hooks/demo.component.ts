import { Component, DoCheck, Input, OnChanges, OnInit } from "@angular/core";

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',

})

export class DemoComponent implements OnChanges, OnInit, DoCheck {
@Input() message: string;

ngOnChanges(){
    console.log('OnChanges called....');
}

ngOnInit(){
    console.log('OnInit executed after Onchanges but only once...')
}

ngDoCheck(): void {
    console.log('DoCheck comes after OnInit, but every time when change detection cycle runs.. but onchanges is executed only if the Input proprty changes');
}
}