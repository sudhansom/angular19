import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  results = signal<string>('');

  constructor() { }


  calculateResult(duration: number, initialInvestment: number, annualInvestment: number, expectedReturn: number){
    let investmentValue = 0;
    let annualData = [];
    for( let i = 0; i < duration; i++){
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  }

}
