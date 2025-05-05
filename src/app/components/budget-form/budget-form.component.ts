import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-budget-form',
  imports: [FormsModule],
  templateUrl: './budget-form.component.html',
  styleUrl: './budget-form.component.scss'
})
export class BudgetFormComponent {
  initialInvestment = '0';
  annualInvestment = '0';
  aspectedReturn = '0';
  duration = '0';
}
