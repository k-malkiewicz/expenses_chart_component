import { Component, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-balance",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="p-[1.5rem_2rem] max400:p-[1.25rem] bg-soft-red text-white rounded-[1rem] flex justify-between items-center"
    >
      <div>
        <p class="max400:text-[.875rem]">My balance</p>
        <p class="font-bold text-[2.0625rem] max400:text-[1.5rem]">$921.48</p>
      </div>
      <svg
        width="72"
        height="48"
        class="mr-[.3125rem] max400:mr-0 max400:scale-[.85]"
        viewBox="0 0 72 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <circle fill="#382314" cx="48" cy="24" r="24" />
          <circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23" />
        </g>
      </svg>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class BalanceComponent {}
