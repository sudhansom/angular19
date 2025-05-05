import { Component, input } from '@angular/core';

import { ContainerComponent } from '../container/container.component';

interface Result {
  initialInvestment: string;
  annualInvestment: string;
  aspectedReturn: string;
  duration: string;
}

@Component({
  selector: 'app-results',
  imports: [ContainerComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  result = input<Result | undefined>( undefined);
}
