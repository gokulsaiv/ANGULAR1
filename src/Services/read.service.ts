import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { filter } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ReadService {
  users: any;

  constructor(private http: HttpClient) {}
  getUsers(): any {
    return this.http.get<any>("http://localhost:3000/users");
  }
}
