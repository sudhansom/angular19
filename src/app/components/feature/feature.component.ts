import { Component, Input } from '@angular/core';

interface Feature {
  title: string,
  description: string,
}

@Component({
  selector: 'app-feature',
  imports: [],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {
  @Input({required: true}) feature: Feature;
}
