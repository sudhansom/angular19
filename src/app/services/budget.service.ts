import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  results = signal<string>('');

  constructor() { }
}
