import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';


interface Links {
  name: string,
  label: string
}

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnChanges {
  @Input() links : Links[];

  constructor(){
    console.log("constructor call: Display Linkes(does not display here): ", this.links)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Onchanges: Gets here the Inputs:', this.links);
  }
}
