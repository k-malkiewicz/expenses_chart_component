import { Component, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-month-stats",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="mt-[2.125rem] max400:mt-[1.5rem] p-[1.875rem_0_.125rem] max400:p-[1.5625rem_0_0] border-t-[.0625rem] border-t-medium-brown flex justify-between items-end"
    >
      <div>
        <p class="text-medium-brown max400:text-[.9375rem]">Total this month</p>
        <p
          class="mt-[-0.25rem] max400:mt-[-0.125rem] text-[3.125rem] max560:text-[1.875rem] font-bold"
        >
          $478.33
        </p>
      </div>
      <div class="pb-[1.125rem] max560:pb-[.3125rem] text-right">
        <p class="font-bold max400:text-[.875rem]">+2.4%</p>
        <p class="mt-[-0.25rem] text-medium-brown max400:text-[.9375rem]">
          from last month
        </p>
      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class MonthStatsComponent {
  
}
