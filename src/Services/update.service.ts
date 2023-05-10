import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UpdateService {
  headers = new HttpHeaders()
    .set("Cache-Control", "no-cache")
    .set("Pragma", "no-cache")
    .set("If-Modified-Since", "0");

  constructor(private http: HttpClient) {}
  update(user: any, update: any): any {
    if (user.password === update.password) {
      
      return this.http.put(
        `http://localhost:3000/users/${user.id}`,
        { ...user, age: update.age },
        { headers: this.headers }
      );
    } 
  }
}
