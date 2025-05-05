import { Component, output } from '@angular/core';

import { FormsModule } from '@angular/forms';

interface Result {
  initialInvestment: string;
  annualInvestment: string;
  aspectedReturn: string;
  duration: string;
}

@Component({
  selector: 'app-budget-form',
  imports: [FormsModule],
  templateUrl: './budget-form.component.html',
  styleUrl: './budget-form.component.scss'
})
export class BudgetFormComponent {
  result = output<Result>();
  initialInvestment = '0';
  annualInvestment = '0';
  aspectedReturn = '0';
  duration = '0';

  doCalculations(){
    this.result.emit({
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      aspectedReturn: this.aspectedReturn,
      duration: this.duration
    });
  }
}
