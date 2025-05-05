import { Component, signal } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { BudgetFormComponent } from '../../components/budget-form/budget-form.component';
import { ResultsComponent } from '../../components/results/results.component';

interface Result {
  initialInvestment: string;
  annualInvestment: string;
  aspectedReturn: string;
  duration: string;
}

@Component({
  selector: 'app-budget',
  imports: [ContainerComponent, BudgetFormComponent, ResultsComponent],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.scss'
})
export class BudgetComponent {
  result = signal<Result | undefined>(undefined);

  calculateResult(result: Result){
    this.result.set(result);
  }
}
