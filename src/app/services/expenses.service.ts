import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Expense } from "../interfaces/expense.interface";

@Injectable({
  providedIn: "root",
})
export class ExpensesService {
  private DATA_URL = "/assets/data.json";

  constructor(private http: HttpClient) {}

  getData(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.DATA_URL);
  }
}
