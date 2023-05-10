import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DeleteService {
  constructor(private http: HttpClient) {}
  delete(id: any, user: any) {
    this.http
      .put(`http://localhost:3000/users/${id}`, {
        ...user,
        isDeleted: !user.isDeleted,
      })
      .subscribe(() => {});
  }
}
