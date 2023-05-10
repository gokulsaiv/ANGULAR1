import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManageComponent } from "./manage/manage.component";
import { DetailsComponent } from "./details/details.component";
import { CreateFormComponent } from "./create-form/create-form.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  {
    path: "manage",
    children: [
      { path: "details/:id", component: DetailsComponent },
      { path: "create", component: CreateFormComponent },
      { path: "edit/:id", component: EditComponent },
    ],
    component: ManageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRoutingModule {}
