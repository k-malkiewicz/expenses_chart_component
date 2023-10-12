import { Component, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BalanceComponent } from "./components/balance/balance.component";
import { MonthStatsComponent } from "./components/month-stats/month-stats.component";
import { SpendingComponent } from "./components/spending/spending.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    BalanceComponent,
    SpendingComponent,
    MonthStatsComponent,
  ],
  template: `
    <main
      class="m-[4.125rem_0] w-[33.75rem] max560:w-[25rem] max400:w-[21.5625rem] text-[1.125rem] text-dark-brown"
    >
      <section>
        <app-balance></app-balance>
        <div
          class="p-[1.75rem_2.375rem] max400:p-[1.25rem] mt-[1.5rem] max400:mt-[1rem] bg-white rounded-[1rem]"
        >
          <app-spending></app-spending>
          <app-month-stats></app-month-stats>
        </div>
      </section>
    </main>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = "expenses-chart-component";
}
