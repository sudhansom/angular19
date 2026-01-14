import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',

})

export class DemoComponent {
@Input() message: string;

ngOnChanges(){
    console.log('OnChanges called....');
}

ngOnInit(){
    console.log('OnInit executed after Onchanges but only once...')
}
}