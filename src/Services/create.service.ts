import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CreateService {
  constructor(private http: HttpClient) {}
  add(newUser: any): any {
    return this.http.post("http://localhost:3000/users", newUser);
  }
}
