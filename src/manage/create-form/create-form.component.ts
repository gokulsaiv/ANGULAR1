import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { CreateService } from "src/Services/create.service";

@Component({
  selector: "app-create-form",
  templateUrl: "./create-form.component.html",
  styleUrls: ["./create-form.component.css"],
})
export class CreateFormComponent implements OnInit {
  constructor(private fb: FormBuilder, private service: CreateService) {}
  createForm: any;
  ngOnInit() {
    this.createForm = this.fb.group({
      firstName: [""],
      lastName: [""],
      login: [""],
      password: [""],
      age: [""],
    });
  }

  Onsubmit() {
    this.service
      .add({ ...this.createForm.value, isDeleted: false })
      .subscribe((data: any) => {});

    this.createForm.reset();
  }
}
