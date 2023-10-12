import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Expense } from "src/app/interfaces/expense.interface";
import { ExpensesService } from "src/app/services/expenses.service";
import { Observable, of } from "rxjs";

@Component({
  selector: "app-spending",
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="text-[2.0625rem] max400:text-[1.5rem] text-dark-brown font-bold">
      Spending - Last 7 days
    </h1>

    <ul
      class="mt-[.6875rem] max400:mt-[.125rem] h-[12.5rem] grid grid-cols-[repeat(7,3.125rem)] max560:grid-cols-[repeat(7,2.0625rem)] justify-between items-end"
    >
      <li
        *ngFor="let expense of expenses$ | async; let i = index"
        [style.height.rem]="barHeights[i]"
        class="h-[3.125rem] rounded-[.3125rem] cursor-pointer relative max560:min-w-[1.875rem] max560:text-[.8125rem] max560:py-[.1875rem] group"
        [ngClass]="{
          'bg-cyan hover:bg-cyan/60': i === 2,
          'bg-soft-red hover:bg-soft-red/60': i !== 2
        }"
      >
        <div
          class="hidden group-hover:block min-w-[4.6875rem] py-[.4063rem] bg-dark-brown text-white text-center font-bold rounded-[.3125rem] absolute top-[-3.125rem] left-[50%] translate-x-[-50%] z-[1]"
        >
          \${{ expense.amount }}
        </div>
      </li>
    </ul>

    <ul
      class="mt-[.5rem] text-[.9375rem] max400:text-[.75rem] text-medium-brown text-center grid grid-cols-[repeat(7,3.125rem)] max560:grid-cols-[repeat(7,2.0625rem)] justify-between"
    >
      <li *ngFor="let expense of expenses$ | async">{{ expense.day }}</li>
    </ul>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class SpendingComponent implements OnInit {
  expenses$: Observable<Expense[]> = of([]);
  barHeights = [3.125, 6.25, 9.375, 5.625, 4.375, 7.75, 4.6875];

  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {
    this.getSpendingData();
  }

  getSpendingData(): void {
    this.expenses$ = this.expensesService.getData();
  }
}
